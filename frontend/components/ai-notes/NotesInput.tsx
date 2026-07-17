"use client";

import { FileText, Sparkles, UploadCloud } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type NotesInputProps = {
  text: string;
  setText: (value: string) => void;
  onGenerate: () => void;
  onFileSelect: (file: File) => void;
  loading: boolean;
};

export default function NotesInput({
  text,
  setText,
  onGenerate,
  onFileSelect,
  loading,
}: NotesInputProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characterCount = text.length;

  const readTime = Math.max(
    1,
    Math.ceil(wordCount / 200)
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col h-full">

      {/* Header */}

      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center">

            <FileText
              size={22}
              className="text-sky-600"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Study Notes
            </h2>

            <p className="text-sm text-slate-500">
              Upload a PDF or paste your study notes
            </p>

          </div>

        </div>

        {/* Upload */}

        <div
          {...getRootProps()}
          className="
            cursor-pointer
            rounded-2xl
            border
            border-sky-200
            bg-sky-50
            hover:bg-sky-100
            transition-all
            duration-300
            px-4
            py-3
            text-sky-700
            flex
            items-center
            gap-2
            font-medium
          "
        >

          <input {...getInputProps()} />

          <UploadCloud size={18} />

          Upload PDF

        </div>

      </div>

      {/* Textarea */}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your notes here..."
        className="
          flex-1
          min-h-[360px]
          max-h-[360px]
          overflow-y-auto
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-5
          resize-none
          outline-none
          text-slate-700
          leading-7
          transition-all
          focus:border-sky-400
          focus:ring-4
          focus:ring-sky-100
        "
      />

      {/* Bottom */}

      <div className="mt-5">

        <div className="grid grid-cols-3 gap-3 mb-5">

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">

            <p className="text-xs text-slate-500">
              Words
            </p>

            <h3 className="font-bold text-xl text-slate-900">
              {wordCount}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">

            <p className="text-xs text-slate-500">
              Characters
            </p>

            <h3 className="font-bold text-xl text-slate-900">
              {characterCount}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">

            <p className="text-xs text-slate-500">
              Read Time
            </p>

            <h3 className="font-bold text-xl text-slate-900">
              {readTime} min
            </h3>

          </div>

        </div>

        <button
          onClick={onGenerate}
          disabled={loading || !text.trim()}
          className="
            w-full
            rounded-2xl
            py-4
            font-semibold
            flex
            items-center
            justify-center
            gap-3
            text-white
            bg-gradient-to-r
            from-sky-500
            via-sky-500
            to-blue-500
            shadow-sm
            transition-all
            duration-300
            hover:shadow-md
            hover:scale-[1.01]
            disabled:opacity-50
            disabled:hover:scale-100
          "
        >

          <Sparkles size={20} />

          {loading
            ? "Generating Summary..."
            : "Generate AI Summary"}

        </button>

      </div>

    </div>
  );
}