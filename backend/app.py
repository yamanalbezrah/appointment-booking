from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from datetime import datetime
from models import Booking, Session


app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'click2booknow@gmail.com'
app.config['MAIL_PASSWORD'] = 'lqsg ztjc hzhy jlxl'
app.config['MAIL_DEFAULT_SENDER'] = 'click2booknow@gmail.com'

mail = Mail(app)

CORS(app)  # This allows your React frontend to make requests to Flask

#bookings = []

@app.route('/api/book', methods=['POST'])
def book_appointment():
    data = request.get_json()
    #bookings.append(data)
    session = Session()

    # Save to DB
    new_booking = Booking(
        name=data['name'],
        email=data['email'],
        service=data['service'],
        time=data['time']
    )

    session.add(new_booking)
    session.commit()
    session.close()

    print("Received booking:", data)


    raw_time = data['time']
    try:
        formatted_time = datetime.fromisoformat(raw_time).strftime('%B %d, %Y at %I:%M %p')
    except:
        formatted_time = raw_time  # fallback

    # Attempt to send a confirmation email
    try:
        msg = Message(
            subject='Your Appointment is Confirmed',
            recipients=[data['email']],
            body=f"""
Hi {data['name']},

Your appointment for {data['service']} is confirmed.

📅 Date/Time: {formatted_time}

Thank you for choosing us!
"""
        )
        mail.send(msg)
        print("📧 Confirmation email sent to", data['email'])
    except Exception as e:
        print("❌ Failed to send email:", e)

    return jsonify({"message": "Appointment received!"}), 200

@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    session = Session()
    bookings = session.query(Booking).all()
    session.close()

    return jsonify([
        {
            "id": b.id,
            "name": b.name,
            "email": b.email,
            "service": b.service,
            "time": b.time
        } for b in bookings
    ])

@app.route('/api/bookings', methods=['DELETE'])
def delete_all_bookings():
    session = Session()
    try:
        session.query(Booking).delete()
        session.commit()
        session.close()
        return jsonify({"message": "All bookings deleted successfully!"}), 200
    except Exception as e:
        session.rollback()
        session.close()
        return jsonify({"error": "Failed to delete bookings"}), 500

if __name__ == '__main__':
    app.run(debug=True)
