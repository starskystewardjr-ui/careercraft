"use client";

export default function TeenSignup() {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("/api/teens", {
      method: "POST",
      body: data,
    });

    const json = await res.json();
    alert(JSON.stringify(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Teen Signup</h1>

      <input name="name" placeholder="Name" required />
      <br />

      <input name="age" placeholder="Age" required />
      <br />

      <input name="city" placeholder="City" required />
      <br />

      <input name="skills" placeholder="Skills" required />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}