
// Types for our code bits
export type CodeLanguage = 'javascript' | 'typescript' | 'python' | 'html' | 'css' | 'react';

export interface CodeBit {
  id: string;
  title: string;
  description: string;
  language: CodeLanguage;
  code: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  likes: number;
  isLocked: boolean;
  tags: string[];
  progress: number;
}
