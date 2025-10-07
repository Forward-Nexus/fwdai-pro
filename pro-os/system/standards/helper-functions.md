---
version: 1.0.0
purpose: Common helper functions and operations for FWD PRO experts
---

# Helper Functions & Operations

## Purpose

Quick reference for common operations experts perform. Copy and adapt as needed.

---

## Git Operations

### Branch Creation & Switching

```bash
# Create and switch to new feature branch
git checkout -b feature/[feature-name]

# Examples
git checkout -b feature/authentication
git checkout -b feature/pitch-deck-update
git checkout -b fix/login-bug
```

### Committing Changes

```bash
# Stage all changes
git add .

# Stage specific files
git add src/services/auth.js tests/auth.test.js

# Commit with message
git commit -m "[Expert]: Brief description

- Detail 1
- Detail 2

Refs: roundtable/workspace/[workspace-name].md"

# Examples
git commit -m "Ada: Implement JWT authentication

- Add token generation and validation
- Implement refresh token rotation
- Add rate limiting on auth endpoints
- All tests passing (47/47)

Refs: roundtable/workspace/auth-feature.md"

git commit -m "Lyna: Update investor pitch deck

- Add market size slide
- Update financial projections
- Incorporate Benji's feedback
- Ready for founder review

Refs: roundtable/workspace/pitch-deck.md"
```

### Pushing Changes

```bash
# Push to remote (first time)
git push -u origin feature/[feature-name]

# Push subsequent changes
git push

# Push with force (ONLY if you're sure!)
git push --force-with-lease
```

### Viewing Status & History

```bash
# Check current status
git status

# View recent commits
git log --oneline -10

# View changes
git diff

# View changes for specific file
git diff src/services/auth.js
```

### Stashing Changes

```bash
# Stash current changes
git stash

# Stash with message
git stash save "WIP: auth implementation"

# List stashes
git stash list

# Apply most recent stash
git stash pop

# Apply specific stash
git stash apply stash@{0}
```

---

## File Operations

### Searching Files

```bash
# Search for text in all files
grep -r "search term" .

# Search in specific directory
grep -r "searchTerm" src/

# Search in specific file types
grep -r "searchTerm" --include="*.js" .

# Case-insensitive search
grep -ri "searchterm" .

# Show line numbers
grep -rn "searchTerm" .

# Search and show context (3 lines before/after)
grep -C 3 "searchTerm" file.js
```

### Finding Files

```bash
# Find files by name
find . -name "auth*.js"

# Find files modified in last 24 hours
find . -mtime -1

# Find files by type
find . -type f -name "*.md"

# Find directories
find . -type d -name "tests"
```

### Creating Directories

```bash
# Create single directory
mkdir new-folder

# Create nested directories
mkdir -p documents/technical/specs

# Create multiple directories
mkdir src/components src/services src/utils
```

### Copying & Moving Files

```bash
# Copy file
cp source.js destination.js

# Copy directory recursively
cp -r source-folder/ destination-folder/

# Move/rename file
mv old-name.js new-name.js

# Move to different directory
mv file.js ../other-folder/
```

---

## Testing Commands

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- auth.test.js

# Run tests matching pattern
npm test -- --testNamePattern="login"

# Run tests with coverage
npm run test:coverage

# Run tests verbosely
npm test -- --verbose
```

### Test Coverage

```bash
# Generate coverage report
npm run test:coverage

# View coverage in browser
npm run test:coverage -- --coverage && open coverage/index.html

# Coverage for specific files
npm test -- --coverage --collectCoverageFrom="src/services/**/*.js"
```

---

## Package Management

### Installing Packages

```bash
# Install all dependencies
npm install

# Install specific package
npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Install specific version
npm install package-name@1.2.3

# Install globally
npm install -g package-name
```

### Updating Packages

```bash
# Update all packages
npm update

# Update specific package
npm update package-name

# Check for outdated packages
npm outdated

# Update to latest (including breaking changes)
npm install package-name@latest
```

---

## Development Servers

### Starting Servers

```bash
# Start development server
npm start

# Start with hot reload
npm run dev

# Start on specific port
PORT=3000 npm start

# Start in production mode
NODE_ENV=production npm start
```

### Building

```bash
# Build for production
npm run build

# Build and watch for changes
npm run build -- --watch

# Clean build
npm run clean && npm run build
```

---

## Linting & Formatting

### Running Linters

```bash
# Run ESLint
npm run lint

# Run ESLint and fix auto-fixable issues
npm run lint -- --fix

# Lint specific files
npx eslint src/services/auth.js

# Lint with different config
npx eslint . --config .eslintrc.custom.js
```

### Code Formatting

```bash
# Format with Prettier
npm run format

# Format specific files
npx prettier --write src/services/auth.js

# Check formatting (don't write)
npx prettier --check .
```

---

## Database Operations

### Migrations

```bash
# Run migrations
npm run migrate

# Rollback last migration
npm run migrate:rollback

# Create new migration
npm run migrate:create add_users_table

# Check migration status
npm run migrate:status
```

### Seeding

```bash
# Seed database
npm run seed

# Seed with specific seeder
npm run seed -- --specific=users
```

---

## Environment Variables

### Loading Environment Variables

```bash
# Run command with env file
NODE_ENV=production node app.js

# Use dotenv in code
# In .env file:
DATABASE_URL=postgresql://localhost/db
API_KEY=abc123

# In code:
require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
```

### Checking Environment

```bash
# Print all environment variables
printenv

# Print specific variable
echo $NODE_ENV

# Set for current session
export NODE_ENV=production
```

---

## File Watching

### Watch and Rebuild

```bash
# Watch files and run command on change
npx nodemon --exec "npm test"

# Watch specific files
npx nodemon --watch src/ --exec "npm start"

# Watch and compile
npm run watch
```

---

## Debugging

### Node.js Debugging

```bash
# Run with debugger
node --inspect app.js

# Run with debugger and break at start
node --inspect-brk app.js

# Debug tests
node --inspect-brk node_modules/.bin/jest --runInBand
```

### Logging

```bash
# Tail log file
tail -f logs/app.log

# Follow log with grep filter
tail -f logs/app.log | grep ERROR

# View last 100 lines
tail -100 logs/app.log
```

---

## Network & API Testing

### cURL Commands

```bash
# GET request
curl https://api.example.com/users

# POST request with JSON
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ward","email":"ward@example.com"}'

# With authentication
curl -H "Authorization: Bearer TOKEN" \
  https://api.example.com/protected

# Save response to file
curl https://api.example.com/data > response.json

# Show response headers
curl -i https://api.example.com/users

# Follow redirects
curl -L https://example.com
```

### HTTP Server

```bash
# Quick HTTP server (Python)
python -m http.server 8000

# Quick HTTP server (Node.js)
npx http-server -p 8000
```

---

## Process Management

### Finding Processes

```bash
# Find process by port
lsof -i :3000

# Find Node processes
ps aux | grep node

# Kill process by PID
kill -9 [PID]

# Kill process on port
kill -9 $(lsof -t -i:3000)
```

---

## Compression & Archives

### Creating Archives

```bash
# Create tar.gz
tar -czf archive.tar.gz folder/

# Create zip
zip -r archive.zip folder/
```

### Extracting Archives

```bash
# Extract tar.gz
tar -xzf archive.tar.gz

# Extract zip
unzip archive.zip

# Extract to specific directory
unzip archive.zip -d /path/to/directory
```

---

## Permissions

### File Permissions

```bash
# Make file executable
chmod +x script.sh

# Set specific permissions (read, write, execute for owner)
chmod 755 file.sh

# Change ownership
chown user:group file.txt

# Recursive permission change
chmod -R 755 folder/
```

---

## Notifications (Optional)

### macOS

```bash
# Play sound
afplay /System/Library/Sounds/Glass.aiff

# Show notification
osascript -e 'display notification "Task complete!" with title "FWD PRO"'
```

### Linux

```bash
# Play sound
paplay /usr/share/sounds/freedesktop/stereo/complete.oga

# Show notification
notify-send "FWD PRO" "Task complete!"
```

### Windows (PowerShell)

```powershell
# Play beep
[System.Console]::Beep(800, 300)

# Show notification
[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] > $null
$Template = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent([Windows.UI.Notifications.ToastTemplateType]::ToastText01)
$RawXml = [xml] $Template.GetXml()
$RawXml.toast.visual.binding.text.text = "Task complete!"
```

---

## Clipboard Operations

### Copy to Clipboard

```bash
# macOS
pbcopy < file.txt
echo "text" | pbcopy

# Linux (with xclip)
xclip -selection clipboard < file.txt

# Windows (PowerShell)
Get-Content file.txt | Set-Clipboard
```

### Paste from Clipboard

```bash
# macOS
pbpaste

# Linux (with xclip)
xclip -selection clipboard -o

# Windows (PowerShell)
Get-Clipboard
```

---

## Text Processing

### Counting

```bash
# Count lines in file
wc -l file.txt

# Count words
wc -w file.txt

# Count files in directory
ls -1 | wc -l
```

### Sorting & Unique

```bash
# Sort lines
sort file.txt

# Sort and remove duplicates
sort -u file.txt

# Find unique lines
sort file.txt | uniq
```

---

## Quick Checks

### Check if Command Exists

```bash
# Check if command is available
command -v node >/dev/null 2>&1 && echo "Node is installed"

# Which version
node --version
npm --version
git --version
```

### Check Disk Space

```bash
# Disk usage
df -h

# Directory size
du -sh folder/

# Largest files in directory
du -ah folder/ | sort -rh | head -10
```

---

## Remember

**These are helpers, not requirements.**

- Adapt to your project's needs
- Check project documentation for project-specific commands
- Ask founder if unsure about permissions or destructive operations
- Document project-specific helpers in `project/project-kb.md`

---

**For more help:**
- `man [command]` - Manual for command (Linux/macOS)
- `[command] --help` - Help for command
- Search online for specific use cases

