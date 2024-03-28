import { register } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";

const registerTemp = (handler) => html`<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="register-form" @submit=${handler}>
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function showRegister(ctx) {
  const handler = createSubmitHandler(onSubmit);
  render(registerTemp(handler));
}

async function onSubmit(data, form) {
  if (!data.email || !data.password || data.password != data["re-password"]) {
    return alert("All fields are required");
  }

  await register(data.email, data.password);
  updateNav();
  page.redirect("/");
}
