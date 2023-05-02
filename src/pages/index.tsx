export default function Home() {
  return (
    <>
      <form>
        <div className="grid">
          <label htmlFor="firstname">
            First name
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First name"
              required
            />
          </label>

          <label htmlFor="lastname">
            Last name
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name"
              required
            />
          </label>
        </div>

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          required
        />
        <small>We never share your email with anyone else.</small>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
