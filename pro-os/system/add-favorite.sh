#!/bin/bash
# FWD PRO - Add Favorite Expert or Command
# Makes it easy to add symlinks to your favorites

set -e

echo "🔖 FWD PRO - Add to Favorites"
echo ""

# Ask what to add
echo "What would you like to add to your favorites?"
echo "1) Expert"
echo "2) Command"
read -p "Choose (1 or 2): " choice

if [ "$choice" = "1" ]; then
  echo ""
  echo "Available experts:"
  ls -1 pro-os/experts/*.md | sed 's/pro-os\/experts\//  - /' | sed 's/.md//'
  echo ""
  read -p "Enter expert file name (e.g., elle-legal.md): " expert
  
  # Create symlink
  if [ ! -f "pro-os/experts/$expert" ]; then
    echo "❌ Expert not found: pro-os/experts/$expert"
    exit 1
  fi
  
  # Extract short name
  shortname=$(basename "$expert" .md | cut -d'-' -f1)
  
  ln -sf "../pro-os/experts/$expert" "your-experts/$shortname.md"
  echo "✅ Created shortcut: your-experts/$shortname.md → pro-os/experts/$expert"
  
elif [ "$choice" = "2" ]; then
  echo ""
  echo "Available command types:"
  echo "  1) Flow commands (create-specflow, execute-specflow, etc.)"
  echo "  2) System commands (update-project, create-expert, etc.)"
  echo "  3) Universal commands (create, execute, analyze, etc.)"
  read -p "Choose (1, 2, or 3): " cmdtype
  
  if [ "$cmdtype" = "1" ]; then
    folder="pro-os/commands/flows"
  elif [ "$cmdtype" = "2" ]; then
    folder="pro-os/commands/system"
  else
    folder="pro-os/commands"
  fi
  
  echo ""
  echo "Available commands in $folder:"
  ls -1 "$folder"/*.md 2>/dev/null | sed "s|$folder/||" | sed 's/^/  - /'
  echo ""
  read -p "Enter command file name (e.g., create-spec.md): " command
  
  # Create symlink
  if [ ! -f "$folder/$command" ]; then
    echo "❌ Command not found: $folder/$command"
    exit 1
  fi
  
  # Calculate relative path
  if [ "$cmdtype" = "1" ]; then
    relpath="../pro-os/commands/flows/$command"
  elif [ "$cmdtype" = "2" ]; then
    relpath="../pro-os/commands/system/$command"
  else
    relpath="../pro-os/commands/$command"
  fi
  
  ln -sf "$relpath" "your-commands/$command"
  echo "✅ Created shortcut: your-commands/$command → $folder/$command"
  
else
  echo "❌ Invalid choice"
  exit 1
fi

echo ""
echo "🎉 Done! Check your-experts/ or your-commands/ to see your new shortcut!"

