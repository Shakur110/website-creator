import { Pin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/parts";
import { contactLinks } from "@/lib/projects";
import { NOTE_COLORS, notes, type Note, type NoteColor } from "@/lib/notes";

const MAX = 160;
const tilt = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0", "-rotate-[1.5deg]"];

function NoteCard({ note, i, pending = false }: { note: Note; i: number; pending?: boolean }) {
  return (
    <figure
      className={`relative flex min-h-[11rem] flex-col justify-between rounded-md p-5 pt-7 shadow-[0_14px_30px_-12px_rgba(8,23,63,0.35)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] ${tilt[i % tilt.length]}`}
      style={{ backgroundColor: NOTE_COLORS[note.color] }}
    >
      <Pin
        aria-hidden
        className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-12 fill-brand text-navy"
      />
      <blockquote className="text-[15px] font-medium leading-relaxed text-navy">
        “{note.message}”
      </blockquote>
      <figcaption className="mt-4 text-sm text-navy/70">
        <span className="font-semibold text-navy">{note.name}</span>
        {note.city ? `, ${note.city}` : ""}
        {pending && (
          <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-navy/60">
            Waiting to be pinned
          </span>
        )}
      </figcaption>
    </figure>
  );
}

/** "Pin a note" wall: approved notes on a board, plus a form that emails new notes to Onjoko. */
export function NotesWall() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [color, setColor] = useState<NoteColor>("yellow");
  const [error, setError] = useState("");
  const [mine, setMine] = useState<Note | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return setError("Write a short note first.");
    if (!name.trim()) return setError("Add your name so Onjoko knows who it's from.");
    setError("");
    const note: Note = {
      message: message.trim(),
      name: name.trim(),
      city: city.trim() || undefined,
      color,
    };
    setMine(note);
    const body = [
      "New note for the website wall:",
      "",
      `Note: ${note.message}`,
      `Name: ${note.name}`,
      `City: ${note.city ?? "-"}`,
      `Colour: ${note.color}`,
    ].join("\n");
    window.location.href = `mailto:${contactLinks.email}?subject=${encodeURIComponent(
      `A note for your wall from ${note.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setMessage("");
  };

  const field =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand";

  return (
    <section className="py-24 md:py-32" aria-labelledby="notes-title">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Pin a note</p>
          <h2 id="notes-title" className="display mt-4 text-4xl md:text-5xl">
            Say hi before <em>you go.</em>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Kind words, feedback or a quick hello are all welcome. Notes go up on the wall once I've
            read them.
          </p>
          <form onSubmit={onSubmit} noValidate className="mt-8 space-y-3">
            <label className="block">
              <span className="sr-only">Your note</span>
              <textarea
                value={message}
                maxLength={MAX}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Your note"
                className={`${field} resize-none`}
              />
              <span className="mt-1 block text-right text-xs text-muted-foreground">
                {message.length}/{MAX}
              </span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label>
                <span className="sr-only">Your name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={field}
                />
              </label>
              <label>
                <span className="sr-only">City (optional)</span>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City (optional)"
                  className={field}
                />
              </label>
            </div>
            <fieldset className="flex items-center gap-3 pt-1">
              <legend className="sr-only">Note colour</legend>
              <span className="text-sm text-muted-foreground">Colour</span>
              {(Object.keys(NOTE_COLORS) as NoteColor[]).map((c) => (
                <label key={c} className="cursor-pointer">
                  <input
                    type="radio"
                    name="note-color"
                    value={c}
                    checked={color === c}
                    onChange={() => setColor(c)}
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden
                    className="block h-7 w-7 rounded-full border border-navy/10 transition-transform peer-checked:scale-110 peer-checked:ring-2 peer-checked:ring-brand peer-checked:ring-offset-2 peer-focus-visible:ring-2 peer-focus-visible:ring-brand"
                    style={{ backgroundColor: NOTE_COLORS[c] }}
                  />
                  <span className="sr-only">{c}</span>
                </label>
              ))}
            </fieldset>
            {error && (
              <p role="alert" className="text-sm font-medium text-destructive">
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              <Pin className="h-4 w-4" /> Pin note
            </button>
            {mine && (
              <p role="status" className="text-sm leading-relaxed text-muted-foreground">
                Your email app should open with your note ready. Press send and I'll pin it to the
                wall.
              </p>
            )}
          </form>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={80}>
          <div className="rounded-[2rem] border border-border bg-surface p-6 [background-image:radial-gradient(oklch(0.18_0.03_265/0.08)_1px,transparent_1px)] [background-size:18px_18px] md:p-10">
            <div className="grid gap-8 pt-3 sm:grid-cols-2 xl:grid-cols-3">
              {mine && <NoteCard note={mine} i={1} pending />}
              {notes.map((n, i) => (
                <NoteCard key={`${n.name}-${i}`} note={n} i={i} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
