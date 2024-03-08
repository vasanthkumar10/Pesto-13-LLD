// Memento Pattern

// originator -> provider or playground or file
class TextFile {
  constructor() {
    this.content = "";
  }

  getContent() {
    return this.content;
  }

  setContent(newContent) {
    this.content = newContent;
  }

  createMemento() {
    return new Memento(this.content);
  }
}

// Memento -> represents the snapshot of particular instance
class Memento {
  constructor(content) {
    this.state = content;
  }

  getState() {
    return this.state;
  }
}

// CareTaker -> manages undo and redo ops
class CodeEditor {
  constructor() {
    this.history = [new Memento("")];
    this.currentIndex = 0;
  }

  save(file) {
    const memento = file.createMemento();
    this.history.push(memento);
    this.currentIndex++;
  }

  undo(file) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const currentSnapshot = this.history[this.currentIndex];
      const currentContent = currentSnapshot.getState();
      file.setContent(currentContent);
    }
  }

  undo(file) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const currentSnapshot = this.history[this.currentIndex];
      const currentContent = currentSnapshot.getState();
      file.setContent(currentContent);
    }
  }

  redo(file) {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      const currentSnapshot = this.history[this.currentIndex];
      const currentContent = currentSnapshot.getState();
      file.setContent(currentContent);
    }
  }
}

const vscode = new CodeEditor();
const file = new TextFile();
file.setContent("v");
vscode.save(file);

file.setContent("va");
vscode.save(file);

// console.log("before undo", file.getContent());
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);

// console.log(vscode);
console.log(file.getContent());

// redo
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
