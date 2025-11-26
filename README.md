# Task Tracker Application

A modern, full-stack task management application built with Next.js 16, Prisma, and MongoDB. Features a clean UI with real-time filtering, CRUD operations, and responsive design.

## Features

- ✅ Create, read, update, and delete tasks
- 🏷️ Categorize tasks (Work, Personal, Urgent, Learning)
- 📊 Track task status (Pending, In Progress, Completed)
- 🔍 Real-time search and filtering
- 🎨  UI with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 App Router
- 🗄️ MongoDB database with Prisma ORM

## Tech Stack

- **Framework:** Next.js 16.0.4
- **Language:** TypeScript
- **Database:** MongoDB
- **ORM:** Prisma 5.22.0
- **UI Components:** Radix UI
- **Styling:** Tailwind CSS 4
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Icons:** Lucide React

## Prerequisites

- Node.js >= 20.9.0
- MongoDB database (local or cloud instance)
- npm, yarn, pnpm, or bun

## Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd tasktracker
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory:
```env
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
```

4. **Generate Prisma Client:**
```bash
npx prisma generate
```

5. **Push the schema to your database:**
```bash
npx prisma db push
```

## Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Production Build
```bash
npm run build
npm run start
```

## Project Structure
```
tasktracker/
├── app/
│   ├── api/
│   │   └── tasks/
│   │       ├── [id]/
│   │       │   └── route.ts      # Individual task operations
│   │       └── route.ts          # Task list operations
│   ├── generated/
│   │   └── prisma/              # Generated Prisma client
│   ├── tasks/
│   │   ├── components/
│   │   │   ├── DeleteDialog.tsx
│   │   │   ├── EditTaskDialog.tsx
│   │   │   ├── Filters.tsx
│   │   │   ├── TaskCard.tsx
│   │   │   └── TaskForm.tsx
│   │   └── page.tsx             # Main tasks page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                 # Home page
├── components/
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── db.ts                    # Prisma client setup
│   └── utils.ts                 # Utility functions
├── prisma/
│   └── schema.prisma            # Database schema
└── public/                      # Static assets
```

## API Routes

### Tasks
- `GET /api/tasks` - Get all tasks (sorted by creation date, descending)
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/[id]` - Get a specific task
- `PUT /api/tasks/[id]` - Update a task
- `DELETE /api/tasks/[id]` - Delete a task

## Database Schema
```prisma
model Task {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  category    String
  status      String   @default("pending")
  createdAt   DateTime @default(now())
}
```

## Features in Detail

### Task Management
- Create tasks with title, description, and category
- Edit existing tasks
- Delete tasks with confirmation dialog
- Default status: "pending"

### Filtering
- Search by task title
- Filter by category (Work, Personal, Urgent, Learning)
- Filter by status (Pending, In Progress, Completed)
- Real-time filtering

### Categories
- Work
- Personal
- Urgent
- Learning

### Status Options
- Pending
- In Progress
- Completed

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | MongoDB connection string | Yes |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Prisma Client not found
```bash
npx prisma generate
```

### Database connection issues
- Verify your `DATABASE_URL` in `.env`
- Check MongoDB cluster is accessible
- Ensure IP address is whitelisted (for MongoDB Atlas)

### Build errors
```bash
rm -rf .next
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please open an issue in the GitHub repository.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)