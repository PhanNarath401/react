import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
  // Setting up state for countdown
  const [countdown, setCountdown] = useState({
    days: 22,
    hours: 18,
    minutes: 46,
    seconds: 5
  });

  useEffect(() => {
    // Update countdown every second
    const interval = setInterval(() => {
      setCountdown(prevState => {
        const { days, hours, minutes, seconds } = prevState;

        // Decrease seconds
        let newSeconds = seconds - 1;

        // Handle minute overflow
        if (newSeconds < 0) {
          newSeconds = 59;
          let newMinutes = minutes - 1;
          
          // Handle hour overflow
          if (newMinutes < 0) {
            newMinutes = 59;
            let newHours = hours - 1;

            // Handle day overflow
            if (newHours < 0) {
              newHours = 23;
              let newDays = days - 1;
              return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
            }

            return { days, hours: newHours, minutes: newMinutes, seconds: newSeconds };
          }

          return { days, hours, minutes: newMinutes, seconds: newSeconds };
        }

        return { days, hours, minutes, seconds: newSeconds };
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="discount">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="discount__pic">
              <img src="img/discount.jpg" alt="Discount" />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="discount__text">
              <div className="discount__text__title">
                <span>Discount</span>
                <h2>Summer 2019</h2>
                <h5><span>Sale</span> 50%</h5>
              </div>
              <div className="discount__countdown" id="countdown-time">
                <div className="countdown__item">
                  <span>{countdown.days}</span>
                  <p>Days</p>
                </div>
                <div className="countdown__item">
                  <span>{countdown.hours}</span>
                  <p>Hour</p>
                </div>
                <div className="countdown__item">
                  <span>{countdown.minutes}</span>
                  <p>Min</p>
                </div>
                <div className="countdown__item">
                  <span>{countdown.seconds}</span>
                  <p>Sec</p>
                </div>
              </div>
              <Link to="#">Shop now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
