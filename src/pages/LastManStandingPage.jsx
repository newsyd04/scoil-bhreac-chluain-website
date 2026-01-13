import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LastManStanding = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F4] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Last Man Standing
          </h1>
          <p className="text-lg text-gray-600">
            Stay updated with our newest news, events, and announcements for Last Man Standing 2026.
          </p>
        </header>
        <section className="space-y-6">
            <article className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Event Overview</h2>
                How to enter
                <p className="mt-2 text-gray-700">
                GAA Last Man Standing is a fun and exciting competition where participants predict the last player standing in a series of matches.
                </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Rules & Guidelines</h2>
                <p className="mt-2 text-gray-700">
                1. Participants must register before the start of the competition.<br/>
                2. Each participant selects one player they believe will be the last remaining in the tournament.<br/>
                3. If the selected player is eliminated, the participant is out of the competition.<br/>
                4. The last participant with their selected player still in the tournament wins a grand prize.<br/>
                </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Prizes</h2>
                <p className="mt-2 text-gray-700">
                Exciting prizes await the winner, including exclusive GAA merchandise, tickets to major matches, and more!
                </p>
            </article>
        
        </section>
      </div>
    </div>
  );
};

export default LastManStanding;