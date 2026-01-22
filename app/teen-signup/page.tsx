export default function TeenSignup() {
  return (
    <div>
      <h1>Teen Signup</h1>

      <form method="post" action="/api/teens">
        <input name="name" placeholder="Full Name" required />
        <br />

        <input name="age" placeholder="Age" required />
        <br />

        <input name="city" placeholder="City" required />
        <br />

        <input name="skills" placeholder="Work interests" required />
        <br />

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}