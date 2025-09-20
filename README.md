# Angular Gym Studio

Angular 17 gym studio application with role-based authentication, Material Design UI and AG Grid for viewing classes and registered members.

## Screenshots

### Login Page
<img width="1907" height="898" alt="צילום מסך 2025-09-02 005419" src="https://github.com/user-attachments/assets/45e9af66-8a84-447b-bd32-eb2f5153d1b0" />

### Teacher Dashboard
<img width="1888" height="904" alt="צילום מסך 2025-09-02 005608" src="https://github.com/user-attachments/assets/ab741139-2122-4911-8584-f3639f311097" />

### Secretary Dashboard  
<img width="1915" height="906" alt="צילום מסך 2025-09-02 005725" src="https://github.com/user-attachments/assets/bfb8b6dd-7995-4d8c-8f7b-954cf2d41aef" />

## Features

### Role-Based Authentication
- **Teachers** - Access to class schedules and lesson details
- **Secretaries** - Access to registered members and payment status
- Dynamic routing based on user permissions

### User Interface
- Modern Material Design with Angular Material components
- Responsive grid layout for class display
- Advanced data tables with AG Grid (filtering, sorting)
- Hebrew language support with RTL layout
- Professional styling with hover effects and animations

### Class Information
- Comprehensive class details (Pilates, Yoga, TRX, Aerobics, etc.)
- Class times and schedule information
- Interactive class cards with detailed popups

### Member Information
- Complete member registration data
- Payment status tracking with visual indicators
- Advanced filtering capabilities
- Detailed member information display

## Technologies

- **Angular 17** - Latest Angular framework with Standalone Components
- **Angular Material** - Material Design component library
- **AG Grid** - Professional data grid with advanced features
- **TypeScript** - Type-safe development
- **Reactive Forms** - Advanced form handling and validation

## Getting Started

### Prerequisites
- Node.js 18+
- Angular CLI 17+

### Installation
```bash
# Clone the repository
git clone https://github.com/MiriAppel/angular-gym-studio.git

# Navigate to project directory
cd angular-gym-studio

# Install dependencies
npm install

# Start development server
ng serve
```

Navigate to `http://localhost:4200/`

## Demo Users

Demo login credentials are available in the application source code for testing purposes.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── login/           # Authentication component
│   │   ├── lesson-list/     # Teacher dashboard
│   │   ├── lesson-details/  # Class information popup
│   │   └── registered/      # Secretary dashboard
│   ├── service/
│   │   └── users.service.ts # User management
│   ├── app.routes.ts        # Application routing
│   └── app.config.ts        # App configuration
└── assets/
    └── images/              # Logo and images
```

## Build

Run `ng build` to build the project. Build artifacts will be stored in the `dist/` directory.

## Testing

Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).

