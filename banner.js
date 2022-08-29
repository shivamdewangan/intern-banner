// Shivam Dewangan :: shivam0dewangan@gmail.com

// Enclosing inside iife for fast execution and keeping element inside a single scope
(function( offerPeriod = 99 ) { // Change offerPeriod at end of code
    const parent = document.querySelector( ".sContent > .container:first-child" ); // Element where we have to put banner
    const styles = document.createElement( "style" ); //Style element that will be inserted into head
    const layout = document.createElement( "div" ); // Layout element
    const banner = document.createElement( "div" ); // Banner element
    banner.className = "opt-banner"; // Default class for style purposes

    // Clock icon :: using svg to reduce payload size
    const clock = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class="opt-clock"><g><g><circle cx="32" cy="35" fill="#f2f6fc" r="20"></circle><circle cx="32" cy="35" fill="#e9edf5" r="13"></circle><path d="m51 53 5 10h-4l-6.65-5.7a25.107 25.107 0 0 0 5.52-4.43z" fill="#d99668"></path><path d="m13.13 52.87a25.107 25.107 0 0 0 5.52 4.43l-6.65 5.7h-4l5-10z" fill="#d99668"></path><path d="m3 4 2 2a9.975 9.975 0 0 0 -2 2l-2-2z" fill="#cdd2e1"></path><path d="m63 6-2 2a9.975 9.975 0 0 0 -2-2l2-2z" fill="#cdd2e1"></path><path d="m37 1a2.006 2.006 0 0 1 2 2 1.955 1.955 0 0 1 -.59 1.41 1.955 1.955 0 0 1 -1.41.59h-10a2.006 2.006 0 0 1 -2-2 1.955 1.955 0 0 1 .59-1.41 1.955 1.955 0 0 1 1.41-.59z" fill="#cdd2e1"></path><path d="m34 5v4.08c-.66-.05-1.33-.08-2-.08s-1.34.03-2 .08v-4.08z" fill="#7e8596"></path><path d="m13 12 2.73 2.73a25.221 25.221 0 0 0 -4 4l-2.73-2.73z" fill="#7e8596"></path><path d="m55 16-2.73 2.73a25.221 25.221 0 0 0 -4-4l2.73-2.73z" fill="#7e8596"></path><path d="m18.07 6.93-5.07 5.07-4 4-5.07 5.07a10 10 0 1 1 14.14-14.14z" fill="#ffc247"></path><path d="m3 16a10 10 0 0 1 14.782-8.782l.288-.288a10 10 0 1 0 -14.14 14.14l.288-.288a9.947 9.947 0 0 1 -1.218-4.782z" fill="#f5cd62"></path><path d="m63 14a9.969 9.969 0 0 1 -2.93 7.07l-5.07-5.07-4-4-5.07-5.07a10 10 0 0 1 17.07 7.07z" fill="#ffc247"></path><path d="m61 8a10 10 0 0 0 -15.07-1.07l.288.288a10 10 0 0 1 13.564 13.564l.288.288a10 10 0 0 0 .93-13.07z" fill="#f5cd62"></path><path d="m30 9.08c.66-.05 1.33-.08 2-.08s1.34.03 2 .08a25.771 25.771 0 0 1 14.27 5.65 25.221 25.221 0 0 1 4 4 25.961 25.961 0 0 1 -1.4 34.14 25.107 25.107 0 0 1 -5.52 4.43 25.934 25.934 0 0 1 -26.7 0 25.107 25.107 0 0 1 -5.52-4.43 25.961 25.961 0 0 1 -1.4-34.14 25.221 25.221 0 0 1 4-4 25.771 25.771 0 0 1 14.27-5.65zm22 25.92a20 20 0 1 0 -20 20 19.994 19.994 0 0 0 20-20z" fill="#65b1fc"></path><g fill="#afb4c8"><path d="m31 15h2v4h-2z" fill="#afb4c8"></path><path d="m31 51h2v4h-2z" fill="#afb4c8"></path><path d="m48 34h4v2h-4z" fill="#afb4c8"></path><path d="m12 34h4v2h-4z" fill="#afb4c8"></path><path d="m42.727 21.272h4.001v2h-4.001z" transform="matrix(.707 -.707 .707 .707 -2.648 38.151)" fill="#afb4c8"></path><path d="m17.272 46.728h4.001v2h-4.001z" transform="matrix(.707 -.707 .707 .707 -28.104 27.607)" fill="#afb4c8"></path><path d="m43.728 45.728h2v4.001h-2z" transform="matrix(.707 -.707 .707 .707 -20.648 45.601)" fill="#afb4c8"></path><path d="m18.272 20.272h2v4.001h-2z" transform="matrix(.707 -.707 .707 .707 -10.104 20.148)" fill="#afb4c8"></path></g><path d="m34 32.77a2.94 2.94 0 0 1 1 2.23 3 3 0 0 1 -6 0 3 3 0 0 1 5-2.23z" fill="#cdd2e1"></path><path d="m34 24v8.77a2.982 2.982 0 0 0 -4 0v-8.77a2.006 2.006 0 0 1 2-2 2.015 2.015 0 0 1 2 2z" fill="#d99668"></path><path d="m35 35 5.5 5.5a2.121 2.121 0 0 1 -3 3l-5.5-5.5a3 3 0 0 0 3-3z" fill="#d99668"></path><path d="m32 11a24 24 0 1 0 24 24 24 24 0 0 0 -24-24zm0 44a20 20 0 1 1 20-20 20 20 0 0 1 -20 20z" fill="#4a98f7"></path><path d="m32 14a21 21 0 1 0 21 21 21.024 21.024 0 0 0 -21-21zm18.949 22a18.892 18.892 0 0 1 -4.849 11.688l-2.081-2.082-1.415 1.415 2.084 2.079a18.892 18.892 0 0 1 -11.688 4.849v-2.949h-2v2.949a18.892 18.892 0 0 1 -11.688-4.849l2.082-2.081-1.415-1.415-2.079 2.084a18.892 18.892 0 0 1 -4.849-11.688h2.949v-2h-2.949a18.892 18.892 0 0 1 4.849-11.688l2.081 2.082 1.415-1.415-2.084-2.079a18.892 18.892 0 0 1 11.688-4.849v2.949h2v-2.949a18.892 18.892 0 0 1 11.688 4.849l-2.082 2.081 1.415 1.415 2.079-2.084a18.892 18.892 0 0 1 4.849 11.688h-2.949v2z" fill="#000000"></path><path d="m35.953 34.539a3.963 3.963 0 0 0 -.953-2.157v-8.382a3 3 0 0 0 -6 0v8.382a3.962 3.962 0 0 0 2.539 6.571l5.254 5.254a3.121 3.121 0 1 0 4.414-4.414zm-3.953-11.539a1 1 0 0 1 1 1v7.142a3.592 3.592 0 0 0 -2 0v-7.142a1 1 0 0 1 1-1zm-2 12a2 2 0 1 1 2 2 2 2 0 0 1 -2-2zm9.793 7.793a1.123 1.123 0 0 1 -1.586 0l-4.3-4.3a4.006 4.006 0 0 0 1.586-1.586l4.3 4.3a1.12 1.12 0 0 1 0 1.586z" fill="#000000"></path><path d="m63.707 6.707a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0 -1.414 0l-1.421 1.421a10.965 10.965 0 0 0 -13.65 1.508 1 1 0 0 0 0 1.414l4.364 4.364-1.4 1.4a26.859 26.859 0 0 0 -13.186-5.229v-2.171h2a3 3 0 0 0 0-6h-10a3 3 0 0 0 0 6h2v2.171a26.859 26.859 0 0 0 -13.184 5.229l-1.4-1.4 4.364-4.364a1 1 0 0 0 0-1.414 10.965 10.965 0 0 0 -13.652-1.508l-1.421-1.421a1 1 0 0 0 -1.414 0l-2 2a1 1 0 0 0 0 1.414l1.421 1.421a10.965 10.965 0 0 0 1.508 13.65 1 1 0 0 0 1.414 0l4.364-4.364 1.4 1.4a26.94 26.94 0 0 0 1.485 34.173l-4.78 9.566a1 1 0 0 0 .895 1.447h4a1 1 0 0 0 .651-.241l6.113-5.24a26.9 26.9 0 0 0 26.472 0l6.113 5.24a1 1 0 0 0 .651.241h4a1 1 0 0 0 .9-1.447l-4.782-9.564a26.94 26.94 0 0 0 1.482-34.173l1.4-1.4 4.364 4.364a1 1 0 0 0 1.414 0 10.965 10.965 0 0 0 1.508-13.65zm-2.707-1.293.586.586-.532.532q-.284-.3-.586-.586zm-35-2.414a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2h-10a1 1 0 0 1 -1-1zm5 3h2v2.025c-.332-.012-.665-.025-1-.025s-.668.013-1 .025zm-28.586 0 .586-.586.532.532q-.3.284-.586.586zm1.553 13.618a9 9 0 0 1 12.651-12.65zm6.447-3.618 2.586-2.586 1.259 1.259a27.207 27.207 0 0 0 -2.586 2.586zm1.216 46h-2.012l3.746-7.491a27.183 27.183 0 0 0 3.609 2.911zm40.74 0-5.343-4.58a27.183 27.183 0 0 0 3.609-2.911l3.746 7.491zm-20.37-2a25 25 0 1 1 25-25 25.028 25.028 0 0 1 -25 25zm20.327-42.741a27.207 27.207 0 0 0 -2.586-2.586l1.259-1.259 2.586 2.586zm7.706 2.359-12.651-12.65a9 9 0 0 1 12.651 12.65z" fill="#000000"></path></g></g></svg>`;

    // Css styling for elements
    styles.innerHTML = `
        .opt-banner {
            display: flex;
            font-family: inherit;
            font-size: 16px;
            font-weight: inherit;

            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;
            border-radius: 25px;
        }
        .opt-section {
            padding: 8px;
            display: inline-flex;
            flex-wrap: nowrap;
            align-items: center;
        }
        .opt-title-clock {
            min-width: 2.5em;
            position: relative;
        }
        .opt-title-name {
            font-weight: bold;
        }
        .opt-timer-name {
            padding-right: 5px;
        }
        .opt-timer-clock {
            font-weight: bold;
        }
        .opt-offer-coupon {
            padding-right: 15px;
        }
        .opt-coupon-offer {
            font-weight: bold;
            padding-right: 15px;
        }
        @media screen and (min-width: 992px) {
            .opt-banner {
                background: linear-gradient(to right, #ffb500, #ff8000);

                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                flex-wrap: nowrap;
                border-radius: 25px;
            }
            .opt-title-name {
                text-transform: uppercase;
            }
            .opt-clock {
                position: absolute;
                inset: -2px auto auto 12px;
                width: 44px;
                height: 44px;
                transform: translate(-50%, -50%);
            }
        }
        @media screen and (max-width: 992px) {
            .opt-banner {
                background: #ffebc6;
                box-shadow: 0 0 0 2px #ffd36c;
                overflow: hidden;
                padding: 10px 0;

                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                flex-wrap: nowrap;
                border-radius: 10px;
            }
            .opt-section {
                width: 100%;
                justify-content: center;
                padding: 10px;
            }
            .opt-clock {
                width: 30px;
                height: 30px;
            }
            .opt-title-content {
                position: relative;
            }
            .opt-title-after {
                position: absolute;
                height: 1.5px;
                background: #cec2b2;
                inset: auto .5em -5px .5em;
            }
            .opt-offer-coupon {
                background: #ffd36c;
            }
        }
    `;
    document.head.appendChild( styles ); // Appending styles to head

    layout.style.cssText = "width: 100%; padding: 10px;"; // Styles which doesn't need to be changed

    // Offer sections
    const title = document.createElement("div"); // Offer title section
    title.className = "opt-section opt-offer-title";
    const timer = document.createElement("div"); // Offer timer section
    timer.className = "opt-section opt-offer-timer";
    const coupon = document.createElement("div"); // Offer coupon section
    coupon.className = "opt-section opt-offer-coupon";


    // Left Section
    const titleClock = document.createElement("div"); // Offer title clock
    titleClock.className = "opt-title-clock";
    const titleContent = document.createElement("div"); // Offer title contents
    titleContent.className = "opt-title-content";
    const titleName = document.createElement("div"); // Offer title name content
    titleName.className = "opt-title-name";
    const titleAfter = document.createElement("div"); // Offer title after content
    titleAfter.className = "opt-title-after";

    titleClock.innerHTML = clock;
    titleName.innerHTML = "Limited Time Offer";

    title.appendChild(titleClock);
    title.appendChild(titleContent);
    titleContent.appendChild(titleName);
    titleContent.appendChild(titleAfter);


    // Middle Section
    const timerName = document.createElement("div"); // Timer base name
    timerName.className = "opt-timer-name";
    const timerClock = document.createElement("div"); // Timer clock
    timerClock.className = "opt-timer-clock";

    timerName.innerHTML = "Ends in:";
    timerClock.innerHTML = " 00 : 00 : 00";

    timer.appendChild(timerName);
    timer.appendChild(timerClock);


    // Right Section
    const couponOff = document.createElement("div"); // Coupon offer
    couponOff.className = "opt-coupon-offer";
    const couponCode = document.createElement("div"); // Coupon code
    couponCode.className = "opt-coupon-code";

    couponOff.innerHTML = "Get 10% OFF";
    couponCode.innerHTML = " Use Code: <b>EXAMSTART</b>";

    coupon.appendChild(couponOff);
    coupon.appendChild(couponCode);


    // Appending childs
    banner.appendChild(title);
    banner.appendChild(timer);
    banner.appendChild(coupon);

    layout.appendChild( banner );
    parent.appendChild( layout );


    // FUnction for setting time limit
    function offerTimer( timeleft ) {
        timerClock.innerHTML = new Date(timeleft * 1000).toISOString().slice(11, 19).replaceAll(":", " : "); // Setting time left
        timeleft = timeleft === 0 ? offerPeriod : timeleft - 1; // Reseting clock timer after every loop
        setTimeout(() => { offerTimer( timeleft); }, 1000); // Using recursion
    };
    offerTimer( offerPeriod ); // Calling timer function for first time

}(99)); // (in Seconds)
// Change offer time limit here
// Max time limit is 23 hours 59 minutes 59 seconds ie: 86399 seconds