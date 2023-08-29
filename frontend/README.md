# Frontend (React + Vite)

## Usage

To build and deploy:

- Navigate to the `frontend` directory.

```bash
cd frontend
```

- Install dependencies by running `npm install`.

```bash
npm install
```

- Setup env for the API endpoint
  `VITE_API_URL=YOUR_API_ENDPOINT`
- Update the website content, styling, and functionality as needed.
- Build the frontend app using `npm run build`.

```bash
npm run build
```

- Deploy the built files to an S3 bucket using AWS CLI or your preferred method.

```bash
aws s3 sync ./dist/ s3://$S3_BUCKET --delete
```

===

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
