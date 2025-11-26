'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/shared/components';

export default function CopilotOnboardingPage() {
  const [selectedOption, setSelectedOption] = useState<'proceed' | 'change' | null>(null);

  const steps = [
    { id: 1, label: 'Business Identity', active: true },
    { id: 2, label: 'Team members', active: false },
    { id: 3, label: 'Channels', active: false },
    { id: 4, label: 'Fall-back logic', active: false },
    { id: 5, label: 'AI Assistant', active: false },
    { id: 6, label: 'Automation', active: false },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Header with Progress Bar */}
      <div className="w-full bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Exit Button */}
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
            ✕ Exit
          </Button>

          {/* Progress Bar */}
          <div className="flex-1 flex items-center justify-center gap-1 mx-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-full h-2 rounded-full transition-all ${
                      step.active
                        ? 'bg-gradient-to-r from-[#053D27] to-[#FAB403]'
                        : 'bg-gray-200'
                    }`}
                  />
                  <span
                    className={`text-xs mt-2 whitespace-nowrap ${
                      step.active
                        ? 'text-[#053D27] font-semibold'
                        : 'text-gray-400 font-normal'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-2 h-0.5 bg-transparent mx-1" />
                )}
              </div>
            ))}
          </div>

          <div className="w-12" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Branding */}
        <div className="w-1/2 relative bg-gradient-to-b from-[#053D27] via-[#2A5C4B] to-[#E3CF9B] overflow-hidden">
          {/* Glowing dots background */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2.5 h-2.5 bg-yellow-300 rounded-full opacity-50 blur-[2px]"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Bee Illustration */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
            <Image
              src="/logos/secondary/BEE ICON svg 1.png"
              alt="Beezaro"
              width={100}
              height={100}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Storefront Illustration */}
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20">
            <div className="relative">
              {/* Store Building */}
              <div className="bg-yellow-400 w-40 h-28 rounded-t-lg relative shadow-xl">
                {/* Roof */}
                <div className="absolute -top-6 left-0 right-0 h-10 bg-yellow-500 rounded-t-lg" />
                {/* Awning with stripes */}
                <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-orange-500 to-orange-600">
                  <div className="h-full flex">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 border-r border-orange-700 last:border-r-0"
                      />
                    ))}
                  </div>
                </div>
                {/* Door */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-20 bg-amber-900 rounded-t-lg shadow-inner" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Chat Interface */}
        <div className="w-1/2 bg-gray-100 flex flex-col">
          <div className="flex-1 overflow-y-auto p-8">
            {/* Info Bubble */}
            <div className="mb-6 flex justify-start">
              <div className="bg-gray-200 rounded-2xl px-5 py-3.5 max-w-md flex items-start gap-3 shadow-sm">
                <svg
                  className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-gray-700 leading-relaxed">
                  You're in control. All settings can be changed anytime in your dashboard.
                </p>
              </div>
            </div>

            {/* Beezaro's Message */}
            <div className="mb-6 flex items-start gap-3">
              <div className="flex flex-col items-center">
                <Image
                  src="/logos/secondary/BEE ICON svg 1.png"
                  alt="Beezaro"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xs text-gray-600 mt-1">Beezaro</span>
              </div>
              <div className="bg-[#053D27] text-white rounded-2xl rounded-tl-sm px-5 py-4 max-w-lg">
                <p className="text-sm">
                  Hi Joshua, I'm Beezaro Please confirm that you selected the Business plan and
                  would like to proceed
                </p>
              </div>
            </div>

            {/* Plan Details Card */}
            <div className="mb-6 ml-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-semibold text-gray-900">Business Plan</h3>
                    <span className="bg-[#053D27] text-white text-xs px-2.5 py-1 rounded-md font-medium">
                      Your Plan
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-600 p-1"
                    aria-label="More options"
                    title="More options"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </Button>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-900">£219.2</span>
                  <Button variant="primary" size="sm">
                    Upgrade Plan
                  </Button>
                </div>

                <div className="text-sm text-gray-600 mb-4">/per month</div>

                <div className="mt-4 pt-4 border-t border-yellow-200">
                  <div className="text-sm font-medium text-gray-700 mb-3">Add-ons</div>
                  <div className="space-y-2.5">
                    {['3 Extra Seats', '2 Extra AI Assistant', '2 Extra Whatsapp Channel'].map(
                      (addon) => (
                        <div key={addon} className="flex items-center gap-2.5">
                          <svg
                            className="w-4 h-4 text-[#053D27] flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">{addon}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* User Response Options */}
            <div className="mb-6 ml-12 flex items-start gap-4">
              <div className="flex-1 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="plan-confirmation"
                    value="proceed"
                    checked={selectedOption === 'proceed'}
                    onChange={() => setSelectedOption('proceed')}
                    className="w-5 h-5 text-[#053D27] border-gray-300 focus:ring-[#053D27]"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    Yes, Proceed with my current plan
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="plan-confirmation"
                    value="change"
                    checked={selectedOption === 'change'}
                    onChange={() => setSelectedOption('change')}
                    className="w-5 h-5 text-[#053D27] border-gray-300 focus:ring-[#053D27]"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    No, Change plan
                  </span>
                </label>
              </div>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">JG</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="ml-12 flex gap-3 mb-6">
              <Link href="/manual">
                <Button variant="secondary" size="sm">
                  View in manual setup
                </Button>
              </Link>
              <Button
                variant="primary"
                size="sm"
                rightIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                }
              >
                Skip
              </Button>
            </div>
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3 max-w-3xl mx-auto">
              <input
                type="text"
                placeholder="Type a message...."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#053D27] focus:border-transparent"
              />
              <Button
                variant="primary"
                size="sm"
                className="p-3"
                aria-label="Send message"
                title="Send message"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

