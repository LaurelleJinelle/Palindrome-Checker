import React, { useState } from 'react';

const PalindromeChecker: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const isPalindrome = (input: string): boolean => {
    const processedText = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    return processedText === processedText.split('').reverse().join('');
  };

  const handleCheck = () => {
    if (text.trim() === '') {
      alert('Please input a value');
      return;
    }
    const palindromic = isPalindrome(text);
    setResult(palindromic ? `"${text}" is a palindrome` : `"${text}" is not a palindrome`);
  };

  return (
    <div id="card">
      <h1>Is it a PALINDROME?</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="text-input"
          placeholder='Enter text to check'
        />
        <button onClick={handleCheck} id="check-btn">
          Check
        </button>
        {result && <p id="result">{result}</p>}
      </div>
      <div>
        <h2>What is a palindrome?</h2>
        <p>
          A palindrome is a word or sentence that's spelled the same way both forward and
          backward, ignoring punctuation, case, and spacing.
        </p>
      </div>
    </div>
  );
};

export default PalindromeChecker;
