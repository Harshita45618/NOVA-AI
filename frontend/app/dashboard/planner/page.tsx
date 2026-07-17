"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ReactMarkdown from "react-markdown";
import {
  Sparkles,
  CalendarDays,
  Brain,
  LoaderCircle,
} from "lucide-react";

import { generateStudyPlan } from "@/services/planner";
import { toast } from "sonner";

const subjectOptions = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "Computer Organization",
  "Engineering Mathematics",
  "Discrete Mathematics",
  "Aptitude",
];

const examOptions = [
  "GATE CSE",
  "Semester Exams",
  "Placements",
  "Other",
];

export default function PlannerPage() {
  const [exam, setExam] = useState("GATE CSE");
  const [hours, setHours] = useState(6);
  const [days, setDays] = useState(30);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  function toggleSubject(subject: string) {
    if (subjects.includes(subject)) {
      setSubjects(subjects.filter((s) => s !== subject));
    } else {
      setSubjects([...subjects, subject]);
    }
  }

  async function handleGenerate() {
    if (subjects.length === 0) {
      toast.warning("Please select at least one subject.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateStudyPlan(
        exam,
        subjects,
        hours,
        days
      );

      setPlan(data.plan);
      toast.success("Study plan generated!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate study plan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-8">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-200 text-sky-700 text-sm font-semibold mb-4">

            <Sparkles size={16} />

            AI Powered Planning

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">

              <CalendarDays
                className="text-sky-600"
                size={28}
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-slate-900">
                AI Study Planner
              </h1>

              <p className="text-slate-600 mt-2">
                Generate a personalized study roadmap based on your goals.
              </p>

            </div>

          </div>

        </div>

        <div className="grid xl:grid-cols-2 gap-8">

          {/* Left */}

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Planner Details
            </h2>

            {/* Exam */}

            <label className="block mb-2 font-medium text-slate-700">
              Target Exam
            </label>

            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-3
                mb-6
                focus:border-sky-400
                focus:ring-2
                focus:ring-sky-100
                outline-none
              "
            >
              {examOptions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            {/* Hours */}

            <label className="block mb-2 font-medium text-slate-700">
              Study Hours Per Day
            </label>

            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-3
                mb-6
                focus:border-sky-400
                focus:ring-2
                focus:ring-sky-100
                outline-none
              "
            />

            {/* Days */}

            <label className="block mb-2 font-medium text-slate-700">
              Days Remaining
            </label>

            <input
              type="number"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-3
                mb-6
                focus:border-sky-400
                focus:ring-2
                focus:ring-sky-100
                outline-none
              "
            />

            {/* Subjects */}

            <label className="block mb-3 font-medium text-slate-700">
              Subjects
            </label>

            <div className="grid grid-cols-2 gap-3 mb-8">

              {subjectOptions.map((subject) => (

                <label
                  key={subject}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-3
                    cursor-pointer
                    hover:bg-sky-50
                    hover:border-sky-300
                    transition-all
                  "
                >

                  <input
                    type="checkbox"
                    checked={subjects.includes(subject)}
                    onChange={() => toggleSubject(subject)}
                    className="accent-sky-500"
                  />

                  <span className="text-slate-700">
                    {subject}
                  </span>

                </label>

              ))}

            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-sky-500
                to-blue-500
                hover:from-sky-600
                hover:to-blue-600
                text-white
                py-4
                font-semibold
                transition-all
                shadow-sm
                flex
                items-center
                justify-center
                gap-2
              "
            >

              {loading ? (

                <>
                  <LoaderCircle
                    className="animate-spin"
                    size={20}
                  />

                  Generating...

                </>

              ) : (

                <>
                  <Sparkles size={20} />
                  Generate Study Plan
                </>

              )}

            </button>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 h-[760px] flex flex-col">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">

                <Brain
                  size={22}
                  className="text-sky-600"
                />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Your AI Study Plan
                </h2>

                <p className="text-slate-500 text-sm">
                  Personalized roadmap
                </p>

              </div>

            </div>

            {plan ? (

              <div
                className="
                  flex-1
                  overflow-y-auto
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                  p-6

                  text-slate-700
                  leading-8

                  [&_h1]:text-3xl
                  [&_h1]:font-bold
                  [&_h1]:text-slate-900

                  [&_h2]:text-2xl
                  [&_h2]:font-bold
                  [&_h2]:text-sky-700
                  [&_h2]:mt-8

                  [&_ul]:list-disc
                  [&_ul]:pl-6
                  [&_ul]:space-y-2

                  [&_li]:leading-7

                  [&_strong]:text-sky-700
                "
              >
                <ReactMarkdown>
                  {plan}
                </ReactMarkdown>
              </div>

            ) : (

              <div className="flex-1 flex flex-col justify-center items-center text-center">

                <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center">

                  <CalendarDays
                    size={46}
                    className="text-sky-600"
                  />

                </div>

                <h3 className="text-3xl font-bold text-slate-900 mt-8">
                  No Study Plan Yet
                </h3>

                <p className="text-slate-500 mt-4 max-w-sm leading-7">
                  Fill in the planner details and let NOVA AI create a personalized study roadmap for you.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}