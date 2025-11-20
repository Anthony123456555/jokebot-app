import React, { useState, useEffect } from 'react';
import { 
  Shuffle, 
  Code, 
  User, 
  Beer, 
  AlertTriangle, 
  Bot, 
  Key, 
  Eye, 
  EyeOff, 
  Copy, 
  ThumbsUp, 
  ThumbsDown, 
  Menu,
  X,
  Sparkles
} from 'lucide-react';

// --- Mock Data ---
const CATEGORIES = [
  { id: 'random', label: 'Random', icon: Shuffle, color: 'text-blue-400' },
  { id: 'dev', label: 'Developer', icon: Code, color: 'text-green-400' },
  { id: 'blondes', label: 'Blondes', icon: User, color: 'text-yellow-400' },
  { id: 'beauf', label: 'Beauf / Uncle', icon: Beer, color: 'text-orange-400' },
  { id: 'nsfw', label: '18+ Restricted', icon: AlertTriangle, color: 'text-red-500', danger: true },
];

const JOKES_DATA = [
  // --- DEV JOKES ---
  { id: 1, category: 'dev', setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs.", votes: 42 },
  { id: 2, category: 'dev', setup: "A SQL query walks into a bar, walks up to two tables and asks...", punchline: "Can I join you?", votes: 128 },
  { id: 6, category: 'dev', setup: "!false", punchline: "It's funny because it's true.", votes: 88 },
  { id: 9, category: 'dev', setup: "How many programmers does it take to change a light bulb?", punchline: "None. It's a hardware problem.", votes: 56 },
  { id: 10, category: 'dev', setup: "Why did the developer quit his job?", punchline: "He didn't get arrays.", votes: 23 },
  { id: 11, category: 'dev', setup: "What is a programmer's favorite hangout place?", punchline: "Foo Bar.", votes: 12 },
  { id: 12, category: 'dev', setup: "Why do Java programmers have to wear glasses?", punchline: "Because they don't C#.", votes: 245 },
  { id: 13, category: 'dev', setup: "A user interface is like a joke.", punchline: "If you have to explain it, it's not that good.", votes: 99 },
  { id: 14, category: 'dev', setup: "What do you call a developer who doesn't comment code?", punchline: "A developer.", votes: 7 },
  { id: 15, category: 'dev', setup: "There are 10 types of people in the world.", punchline: "Those who understand binary, and those who don't.", votes: 301 },
  { id: 16, category: 'dev', setup: "Knock, knock.", punchline: "Race condition. Who's there?", votes: 67 },

  // --- BLONDE JOKES ---
  { id: 3, category: 'blondes', setup: "Why did the blonde stare at the orange juice carton?", punchline: "Because it said 'Concentrate'.", votes: 15 },
  { id: 17, category: 'blondes', setup: "Why did the blonde put lipstick on her forehead?", punchline: "She was trying to make up her mind.", votes: 22 },
  { id: 18, category: 'blondes', setup: "What do you call a blonde with two brain cells?", punchline: "Pregnant.", votes: -5 },
  { id: 19, category: 'blondes', setup: "Why did the blonde take a ladder to the bar?", punchline: "She heard the drinks were on the house.", votes: 34 },
  { id: 20, category: 'blondes', setup: "How do you confuse a blonde?", punchline: "Put her in a round room and tell her to sit in the corner.", votes: 41 },
  { id: 21, category: 'blondes', setup: "Why did the blonde get fired from the M&M factory?", punchline: "She kept throwing away the W's.", votes: 18 },

  // --- BEAUF / UNCLE JOKES ---
  { id: 4, category: 'beauf', setup: "What's the difference between a tire and a man?", punchline: "A tire doesn't get bald if you treat it well.", votes: -2 },
  { id: 8, category: 'beauf', setup: "Why is beer better than a woman?", punchline: "You can enjoy a beer all month long.", votes: