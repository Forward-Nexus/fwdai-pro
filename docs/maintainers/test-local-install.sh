#!/bin/bash

# Test Local Installation Script
# This script tests FWD PRO installation before publishing to npm

set -e  # Exit on error

echo "🧪 FWD PRO Local Installation Test"
echo "=================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo -e "${BLUE}📦 Package Location:${NC} $SCRIPT_DIR"
echo ""

# Create test directory
TEST_DIR="$HOME/fwdpro-test-$(date +%s)"
echo -e "${BLUE}🏗️  Creating test directory:${NC} $TEST_DIR"
mkdir -p "$TEST_DIR"

# Test 1: CLI Help
echo ""
echo -e "${YELLOW}Test 1: CLI Help${NC}"
echo "Running: node $SCRIPT_DIR/bin/cli.js help"
node "$SCRIPT_DIR/bin/cli.js" help
echo -e "${GREEN}✅ Test 1 passed!${NC}"

# Test 2: CLI Version
echo ""
echo -e "${YELLOW}Test 2: CLI Version${NC}"
echo "Running: node $SCRIPT_DIR/bin/cli.js version"
node "$SCRIPT_DIR/bin/cli.js" version
echo -e "${GREEN}✅ Test 2 passed!${NC}"

# Test 3: Installation
echo ""
echo -e "${YELLOW}Test 3: Local Installation${NC}"
echo "This will run the installer in test mode..."
echo "You'll need to answer the onboarding questions."
echo ""
read -p "Press ENTER to continue or Ctrl+C to cancel..."

cd "$TEST_DIR"
echo "Running: npx $SCRIPT_DIR install"
npx "$SCRIPT_DIR" install

# Verify files were created
echo ""
echo -e "${YELLOW}Verifying installation...${NC}"

EXPECTED_FILES=(
  ".fwdpro/config.yaml"
  "roundtable/whiteboards.md"
  "roundtable/founder-checklist.md"
  "pro-os/experts/genna-architect.md"
)

FAILED=0
for file in "${EXPECTED_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo -e "${GREEN}✓${NC} Found: $file"
  else
    echo -e "${RED}✗${NC} Missing: $file"
    FAILED=1
  fi
done

if [ $FAILED -eq 0 ]; then
  echo ""
  echo -e "${GREEN}✅ Test 3 passed! All expected files created.${NC}"
else
  echo ""
  echo -e "${RED}❌ Test 3 failed! Some files missing.${NC}"
  exit 1
fi

# Summary
echo ""
echo "=================================="
echo -e "${GREEN}🎉 All tests passed!${NC}"
echo ""
echo "Test directory: $TEST_DIR"
echo "You can inspect the installation there."
echo ""
echo "To test again with a fresh directory, run this script again."
echo "To clean up test directory: rm -rf $TEST_DIR"
echo ""
echo -e "${BLUE}Ready to publish to npm! 🚀${NC}"

