# Heroku Deployment Testing Guide

This guide provides multiple approaches to test your deployment before pushing to Heroku, helping you catch issues early and avoid failed deployments.

## 🚀 Quick Test (Recommended for Most Cases)

```bash
# Clean install and build test
rm -rf node_modules package-lock.json
npm install
npm run build
```

This catches 90% of deployment issues including:
- Missing dependencies
- TypeScript errors
- ESLint errors
- Build failures

## 🔧 Detailed Testing Approaches

### 1. **Local Build Test (Most Common)**

Test the exact same build process Heroku uses:

```bash
# Install dependencies (same as Heroku)
npm ci

# Run the build script (same as Heroku's heroku-postbuild)
npm run heroku-postbuild
```

### 2. **Local Production Build**

Test the complete production build locally:

```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Build for production
npm run build

# Start production server locally
npm start
```

### 3. **Docker Build Test (Most Accurate)**

Test in an environment very similar to Heroku:

```bash
# Create a Dockerfile for testing
echo 'FROM heroku/nodejs:20
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build' > Dockerfile.test

# Build and test
docker build -f Dockerfile.test -t heroku-test .
```

### 4. **Heroku Buildpack Test**

Test using Heroku's buildpack locally:

```bash
# Install Heroku CLI buildpack test tool
npm install -g heroku-buildpack-test

# Test your app
heroku-buildpack-test
```

## 🛡️ Automated Testing

### 5. **Pre-commit Hook**

Set up automatic testing before pushing:

```bash
# Create .git/hooks/pre-push
cat > .git/hooks/pre-push << 'EOF'
#!/bin/bash
echo "Running pre-push tests..."

# Test build
npm run build
if [ $? -ne 0 ]; then
    echo "Build failed! Aborting push."
    exit 1
fi

echo "Build successful! Proceeding with push."
EOF

chmod +x .git/hooks/pre-push
```

### 6. **GitHub Actions CI/CD**

Set up automated testing in GitHub:

```yaml
# .github/workflows/test.yml
name: Test Build
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## 🐛 Common Issues & Solutions

### TypeScript Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit
```

### ESLint Errors
```bash
# Check linting
npm run lint
```

### Missing Dependencies
```bash
# Check for missing packages
npm ls
```

### Environment Variables
```bash
# Test environment variable loading
node -e "console.log(process.env.NODE_ENV)"
```

## 📋 Pre-Deployment Checklist

Before pushing to Heroku, run through this checklist:

- [ ] `npm ci` completes successfully
- [ ] `npm run build` completes successfully
- [ ] `npm run lint` passes
- [ ] All TypeScript errors resolved
- [ ] All imports/exports are correct
- [ ] Environment variables are documented
- [ ] No console.log statements in production code
- [ ] All API routes are properly typed

## 🚨 Emergency Rollback

If a deployment fails and you need to rollback:

```bash
# List recent releases
heroku releases

# Rollback to previous version
heroku rollback v123

# Or rollback to specific version
heroku rollback v120
```

## 🔍 Debugging Failed Deployments

### Check Build Logs
```bash
heroku logs --tail
```

### Check App Status
```bash
heroku ps
```

### Check Environment Variables
```bash
heroku config
```

### Test Locally with Heroku Environment
```bash
# Set production environment
NODE_ENV=production npm run build
```

## 📝 Best Practices

1. **Always test locally first** - Use the quick test above
2. **Use feature branches** - Test on branches before merging to main
3. **Set up automated testing** - Use GitHub Actions or pre-commit hooks
4. **Monitor deployments** - Watch the logs during deployment
5. **Have a rollback plan** - Know how to quickly revert if needed
6. **Test environment variables** - Ensure all required vars are set
7. **Check dependencies** - Verify all packages are compatible

## 🎯 When to Use Each Approach

- **Quick Test**: Before every push
- **Local Build Test**: When adding new dependencies
- **Docker Test**: When you need exact Heroku environment
- **Pre-commit Hook**: For automated protection
- **GitHub Actions**: For team projects with CI/CD

## 📚 Additional Resources

- [Heroku Buildpack Documentation](https://devcenter.heroku.com/articles/buildpacks)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Heroku Troubleshooting](https://devcenter.heroku.com/articles/troubleshooting-node-deploys)
- [TypeScript Configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

---

**Remember**: A few minutes of testing locally can save hours of debugging failed deployments!
