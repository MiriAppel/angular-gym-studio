# Gym Studio Platform

Angular 17 fitness studio platform with role-based authentication, Material Design UI and AG Grid for viewing classes and registered members.

## Features

### Role-Based Authentication
- **Teachers** - Access to class schedules and lesson details
- **Secretaries** - Access to registered members and payment status
- Dynamic routing based on user permissions

### User Interface
- Modern Material Design with Angular Material components
- Responsive grid layout for class display
- Advanced data tables with AG Grid (filtering, sorting, editing)
- Hebrew language support with RTL layout
- Professional styling with hover effects and animations

### Class Management
- Comprehensive class information (Pilates, Yoga, TRX, Aerobics, etc.)
- Instructor details and scheduling
- Class status tracking (started/upcoming)
- Interactive class cards with detailed popups

### Member Management
- Complete member registration data
- Payment status tracking with visual indicators
- Advanced filtering and search capabilities
- Detailed member information display

## Technologies

- **Angular 17** - Latest Angular framework with Standalone Components
- **Angular Material** - Material Design component library
- **AG Grid** - Professional data grid with advanced features
- **TypeScript** - Type-safe development
- **Reactive Forms** - Advanced form handling and validation
- **RxJS** - Reactive programming patterns

## Getting Started

### Prerequisites
- Node.js 18+
- Angular CLI 17+

### Installation
```bash
# Clone the repository
git clone https://github.com/MiriAppel/gym-studio-platform.git

# Navigate to project directory
cd gym-studio-platform

# Install dependencies
npm install

# Start development server
ng serve
```

Navigate to `http://localhost:4200/`

## Demo Users

### Teachers
- **רחל** / Password: 1234
- **נחמי** / Password: 556
- **שרה** / Password: 8989
- **נועה** / Password: 5598
- **לאה** / Password: 154
- **הדס** / Password: 875

### Secretaries
- **יעל** / Password: 52641
- **מיכל** / Password: 44
- **ריקי** / Password: 8796

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

## Technologies Stack

- Angular 17.3
- Angular Material 17.3
- AG Grid Community 33.3
- TypeScript 5.4
- RxJS 7.8
