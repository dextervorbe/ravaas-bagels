# Menu Data ID Guidelines

## ID Range Assignment

To prevent ID conflicts when adding new menu items, use these specific ID ranges:

### **Breakfast Items**
- **Range**: 1-99
- **Current Usage**: 1-12
- **Next Available**: 13

### **Lunch Items** 
- **Range**: 100-199
- **Current Usage**: 101-112
- **Next Available**: 113

### **Drinks Items**
- **Range**: 200-299
- **Current Usage**: 201-218
- **Next Available**: 219

## Adding New Items

When adding new items to any category:

1. **Check the current highest ID** in that category's file
2. **Use the next sequential number** in the assigned range
3. **Never reuse IDs** from other categories
4. **Never go outside the assigned range**

## Examples

### Adding a new breakfast item:
```json
{
  "id": 13,  // Next available in breakfast range (1-99)
  "name": "New Breakfast Item",
  // ... rest of properties
}
```

### Adding a new lunch item:
```json
{
  "id": 113,  // Next available in lunch range (100-199)
  "name": "New Lunch Item", 
  // ... rest of properties
}
```

### Adding a new drink:
```json
{
  "id": 219,  // Next available in drinks range (200-299)
  "name": "New Drink",
  // ... rest of properties
}
```

## Why This System Works

- ✅ **Prevents conflicts**: Each category has its own ID space
- ✅ **Easy to maintain**: Just pick the next number in range
- ✅ **Human readable**: You can tell the category from the ID
- ✅ **Future-proof**: Plenty of room for growth (99 items per category)

## Emergency: If You Hit the Range Limit

If you ever need more than 99 items in a category:
- **Breakfast**: Extend to 1-199
- **Lunch**: Extend to 200-399  
- **Drinks**: Extend to 400-599

But update this documentation when you do!
