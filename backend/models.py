from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class Booking(Base):
    __tablename__ = 'bookings'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    service = Column(String)
    time = Column(String)

# Create SQLite DB
engine = create_engine('sqlite:///bookings.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
