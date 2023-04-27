let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
];

const timeBtns = document.querySelectorAll('.list-timetrack__btn');
const actualTime = document.querySelectorAll('.card__actual-time');
const previousTime = document.querySelectorAll('.card__previous-time');

// console.log(previousTime);

timeBtns.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        timeBtns.forEach(btns => btns.classList.remove('list-timetrack__btn--active'));
        e.target.classList.add('list-timetrack__btn--active');
        const selectedTime = e.target.textContent;
        if (selectedTime == "Daily") {
          for (let i = 0; i < data.length; i++) {
            previousTime[i].textContent = `Previous - ${data[i].timeframes.daily.previous}hrs`
            actualTime[i].textContent = `${data[i].timeframes.daily.current}hrs`
          }
        } else if (selectedTime == "Weekly") {
          for (let i = 0; i < data.length; i++) {
            previousTime[i].textContent = `Last week - ${data[i].timeframes.weekly.previous}hrs`
            actualTime[i].textContent = `${data[i].timeframes.weekly.current}hrs`
          }
        } else {
          for (let i = 0; i < data.length; i++) {
            previousTime[i].textContent = `Last month - ${data[i].timeframes.monthly.previous}hrs`
            actualTime[i].textContent = `${data[i].timeframes.monthly.current}hrs`
          }
        }
        e.target.removeEventListener('click')
    });
});