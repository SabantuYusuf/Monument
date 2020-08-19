import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <div className="wrap">
                <h2>GET IN TOUCH</h2>
                <form className="contact">
                    <input type="text" placeholder="Full Name" class="col-third"/>
                    <input type="text" placeholder="Email" class="col-third"/>
                    <input type="text" placeholder="Subject" class="col-third"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
