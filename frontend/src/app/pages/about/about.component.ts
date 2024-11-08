import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container" style="margin-top: 100px;">
      <h1>About Us</h1>
      <p>Welcome to our e-commerce store. We provide high-quality products at competitive prices.</p>
      <div class="about-content">
        <h2>Our Mission</h2>
        <p>To deliver exceptional products and outstanding customer service.</p>

        <h2>Our Vision</h2>
        <p>To become the leading e-commerce platform for electronics and accessories.</p>
      </div>
    </div>
  `,
  styles: [`
    .about-content {
      margin-top: 2rem;
    }
    h2 {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
  `]
})
export class AboutComponent {}
