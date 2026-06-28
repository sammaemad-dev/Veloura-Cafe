import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-container">

        <h1>Let's Make Something Together</h1>

        <p className="contact-subtitle">
          Connect with Veloura Cafe effortlessly! Fill out the form below
          and let us know how we can help you.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select>

            <option>
              Service Of Interest
            </option>

            <option>
              Reservation
            </option>

            <option>
              Catering
            </option>

            <option>
              Private Events
            </option>

            <option>
              Customer Support
            </option>

          </select>

          <input
            type="text"
            placeholder="Preferred Date"
          />

          <textarea
            placeholder="Message..."
          ></textarea>

          <button type="submit">
            Send
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;