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
    <div className="bg-white rounded-[32px] border border-stone-200 shadow-sm p-8 h-full flex flex-col">

      {/* Header */}

      <div className="flex items-start justify-between mb-8">

        <div className="flex gap-4">

          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">

            <FileText
              className="text-white"
              size={30}
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-stone-900">

              Study Notes

            </h2>

            <p className="mt-2 text-stone-500 leading-7">

              Paste your notes or upload a PDF to generate
              AI-powered summaries.

            </p>

          </div>

        </div>

        <div
          {...getRootProps()}
          className="
            cursor-pointer
            rounded-2xl
            bg-violet-600
            hover:bg-violet-700
            px-5
            py-4
            text-white
            flex
            items-center
            gap-3
            shadow-lg
            transition
          "
        >

          <input {...getInputProps()} />

          <UploadCloud size={20} />

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
          rounded-3xl
          border-2
          border-stone-200
          bg-stone-50
          p-7
          resize-none
          outline-none
          text-lg
          leading-8
          text-stone-700
          transition
          focus:border-violet-500
          focus:bg-white
        "
      />

      {/* Stats */}

      <div className="grid grid-cols-3 gap-5 mt-8">

        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">

          <p className="text-sm text-stone-500">

            Words

          </p>

          <h3 className="text-3xl font-bold mt-2">

            {wordCount}

          </h3>

        </div>

        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">

          <p className="text-sm text-stone-500">

            Characters

          </p>

          <h3 className="text-3xl font-bold mt-2">

            {characterCount}

          </h3>

        </div>

        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">

          <p className="text-sm text-stone-500">

            Read Time

          </p>

          <h3 className="text-3xl font-bold mt-2">

            {readTime} min

          </h3>

        </div>

      </div>

      {/* Generate */}

      <button
        onClick={onGenerate}
        disabled={loading || !text.trim()}
        className="
          mt-8
          w-full
          rounded-3xl
          bg-gradient-to-r
          from-violet-600
          via-indigo-600
          to-blue-600
          py-5
          text-lg
          font-bold
          text-white
          flex
          items-center
          justify-center
          gap-3
          shadow-lg
          transition-all
          hover:scale-[1.01]
          disabled:opacity-50
        "
      >

        <Sparkles size={22} />

        {loading
          ? "Generating AI Summary..."
          : "Generate AI Summary"}

      </button>

    </div>
  );
}