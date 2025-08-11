# Conversa - Real Time Chat App

### Chat Routes
## Chat Routes

This module defines all the routes for managing one-on-one and group chats in the application.  
All routes are protected and require authentication via the `protect` middleware.

**Base Path:** `/api/chat`

---

### 1. Create or Access One-on-One Chat
**POST** `/`  
Creates a new chat with a specific user, or retrieves an existing one-on-one chat if it already exists.  
- **Auth Required:** Yes  
- **Body Params:**
  - `userId` *(String, required)* — The ID of the user to chat with.

---

### 2. Fetch All Chats for Logged-In User
**GET** `/`  
Fetches all chats (both one-on-one and group) that the logged-in user is part of.  
- **Auth Required:** Yes  

---

### 3. Create a Group Chat
**POST** `/group`  
Creates a new group chat with multiple users.  
- **Auth Required:** Yes  
- **Body Params:**
  - `name` *(String, required)* — Group chat name.
  - `users` *(Array of user IDs, required)* — List of users to add to the group.

---

### 4. Rename a Group Chat
**PUT** `/rename`  
Renames an existing group chat.  
- **Auth Required:** Yes  
- **Body Params:**
  - `chatId` *(String, required)* — ID of the group chat.
  - `chatName` *(String, required)* — New name for the group.

---

### 5. Add a User to Group Chat
**PUT** `/groupadd`  
Adds a new member to an existing group chat.  
- **Auth Required:** Yes  
- **Body Params:**
  - `chatId` *(String, required)* — ID of the group chat.
  - `userId` *(String, required)* — ID of the user to add.

---

### 6. Remove a User from Group Chat
**PUT** `/groupremove`  
Removes a member from a group chat.  
- **Auth Required:** Yes  
- **Body Params:**
  - `chatId` *(String, required)* — ID of the group chat.
  - `userId` *(String, required)* — ID of the user to remove.

---

**Notes:**
- All endpoints use the `protect` middleware to ensure only authenticated users can access them.
- Group operations (`/group`, `/rename`, `/groupadd`, `/groupremove`) apply only to chats marked as `isGroupChat: true`.
