# Roadmap for Choice's Cave

**Website Purpose**  
Choice's Cave is a black-and-white, minimalistic website for managing and accessing nodes, notes, and AI tools in a dark theme. Designed for low-end devices, the website will provide a seamless experience, allowing access to nodes, Tmate sessions, and an existing SSH manager, with deployment to Tinkerhost.

## Tech Stack
- **Frontend**: HTML, CSS (Tailwind, Flexbox), JavaScript with GSAP, React, Vue
- **Backend**: Express.js
- **Database**: MySQL
- **Hosting**: Tinkerhost
- **Theme**: Dark theme with black-and-white minimalism

---

## Project Phases

### Phase 1: Initial Setup
- **Project Structure**: Set up a structured repository.
- **Tinkerhost Configuration**: Prepare initial deployment settings to ensure compatibility with Tinkerhost.
- **Basic UI Framework**: 
  - Use HTML, Tailwind CSS, and Flexbox for a minimal, responsive layout.
  - Establish the dark theme with black and white as core colors.
  - Add global styling for consistent typography and component spacing.

### Phase 2: Node List Page
- **Node Display**: Create a list view to display all nodes neatly.
- **Tmate Integration**: 
  - Allow users to link nodes directly to Tmate sessions.
  - Accept URL inputs for each node for easy Tmate session access.
- **SSH Manager Link**: 
  - Embed a link to the external SSH manager site for quick access.

### Phase 3: Notes Page
- **Notes Management**:
  - Add a dedicated notes page with CRUD (Create, Read, Update, Delete) functionality.
  - Connect the notes to MySQL to save and retrieve important user notes.
- **UI/UX**: Design with minimalism, using Tailwind and React for a smooth and responsive experience.

### Phase 4: AI Panel Integration
- **AI Panel Setup**:
  - Create a panel for API-powered AI interaction (e.g., ChatGPT) to assist users.
  - Use API keys to link to OpenAI or similar, ensuring secure usage.
  - Include UI components with Vue or React for dynamic interaction.
- **UX Optimization**: Ensure smooth AI response times on low-end devices.

### Phase 5: Final Touches and Testing
- **Responsive Design Optimization**:
  - Thoroughly test the UI on Chromebooks and other low-end devices.
  - Adjust animations (with GSAP) to ensure smooth, resource-efficient operation.
- **Cross-Browser Testing**: Ensure compatibility with major browsers, especially Chrome on Chromebooks.
- **Deploy to Tinkerhost**: Perform the final deployment on Tinkerhost, testing functionality end-to-end.

### Phase 6: Future Enhancements
- **User Authentication**: Implement a simple login system for secure access.
- **Expanded Notes Feature**: Add tags and categorization for easier organization.
- **Additional Integrations**: Consider extending the AI panel for additional use cases (e.g., node management support).

---

## Milestones
1. **Basic UI & Dark Theme** - Completion Target: Month 1, Week 1
2. **Node List Page & Tmate Session Links** - Completion Target: Month 1, Week 2
3. **Notes Page Integration** - Completion Target: Month 1, Week 3
4. **AI Panel Integration** - Completion Target: Month 1, Week 4
5. **Final Testing and Deployment** - Completion Target: Month 2, Week 1

---

## Notes
- Focus on lightweight design and efficiency to ensure smooth performance on low-end devices.
- Each phase should be thoroughly tested on a Chromebook emulator for compatibility.
- Documentation should be maintained throughout for ease of future enhancements.

---

**Author**: 21Studios / choice21

---

## Ignore
- chicken wing chicken wing hotdog and 