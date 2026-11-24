// Notes pinned to the "Pin a note" wall on the homepage.
//
// Visitors write a note on the site and it arrives in Onjoko's email.
// To pin one, add it to the TOP of this list (newest first). Only add real notes
// that you're happy to show publicly.
//
//   { message: "Your portfolio is so clean!", name: "Ada", city: "Lagos", color: "yellow" },

export const NOTE_COLORS = {
  yellow: "#fff1a8",
  blue: "#d9e6ff",
  pink: "#ffd8e4",
  green: "#d6f5dc",
  lilac: "#e7defc",
} as const;

export type NoteColor = keyof typeof NOTE_COLORS;

export interface Note {
  message: string;
  name: string;
  city?: string | undefined;
  color: NoteColor;
}

export const notes: Note[] = [
  {
    message:
      "Thanks for stopping by! Leave me a note: kind words, feedback or just hello. I read every one.",
    name: "Onjoko",
    city: "Lagos",
    color: "blue",
  },
];
