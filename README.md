# Divishh - Personalized Accessories E-commerce

Divishh is a modern, React-based e-commerce platform specializing in personalized accessories. Unlike traditional e-commerce sites, Divishh features a unique **Order Inquiry System** that connects customers directly with the business owner via email for a personalized shopping experience.

## ✨ Features

- **Personalized Product Catalog**: Browse a variety of customizable accessories including bracelets, necklaces, earrings, and stationery.
- **Cart Management**: Add items to a cart with persistent local storage support.
- **Direct Order Inquiry**: Instead of a standard checkout, users submit an inquiry form. This sends a detailed email to the business owner with:
    - Customer contact details.
    - Shipping address.
    - Full list of cart items (products, quantities, prices).
    - Calculated total amount.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS for mobile and desktop.
- **Interactive UI**: Smooth animations using Framer Motion.

## 🛠 Tech Stack

- **Frontend**: [React](https://reactjs.org/) (TypeScript)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/) - Handles sending order inquiries directly to the owner.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Toast Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Jatinjain1802/Divishh.git
    cd Divishh
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── common/      # Header, Footer, Layout components
│   ├── products/    # Product cards and lists
│   ├── cart/        # Cart drawer and items
│   ├── inquiry/     # Inquiry form with EmailJS logic
│   └── ui/          # Basic UI elements (Buttons, Inputs)
├── contexts/        # React Context (Cart state management)
├── data/            # Static product data
├── layouts/         # Page layouts
├── pages/           # Application pages (Home, Cart, Contact, etc.)
├── types/           # TypeScript interfaces
└── utils/           # Helper functions
```

## 📨 EmailJS Integration

The project uses **EmailJS** to handle order inquiries.

- **File**: `src/components/inquiry/InquiryForm.tsx`
- **Functionality**: When a user submits the inquiry form, the `onSubmit` function compiles the cart details and customer information into a template and sends it via EmailJS to the configured email address (`jjain0740@gmail.com`).
- **Configuration**: The project is pre-configured with a Public Key. Ensure you have the correct Service ID and Template ID if you modify this feature.

## 📄 License

This project is licensed under the MIT License.
