
import { CodeLanguage } from "@/types/codeBits";

// Helper function to get color based on language
export const getLanguageColor = (language: CodeLanguage): string => {
  switch (language) {
    case 'javascript': return 'bg-yellow-500';
    case 'typescript': return 'bg-blue-500';
    case 'python': return 'bg-green-500';
    case 'html': return 'bg-orange-500';
    case 'css': return 'bg-pink-500';
    case 'react': return 'bg-cyan-500';
    default: return 'bg-gray-500';
  }
};

// Helper function to get icon based on language
export const getLanguageIcon = (language: CodeLanguage): React.ReactNode => {
  switch (language) {
    case 'javascript': return 'JS';
    case 'typescript': return 'TS';
    case 'python': return 'PY';
    case 'html': return 'HTML';
    case 'css': return 'CSS';
    case 'react': return '⚛️';
    default: return '📝';
  }
};

// Simulated code bits data
export const mockCodeBits = [
  {
    id: '1',
    title: 'Async/Await Patterns',
    description: 'Master modern JavaScript with these async/await patterns',
    language: 'javascript' as CodeLanguage,
    code: `// Async function example
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}`,
    difficulty: 'intermediate' as const,
    likes: 128,
    isLocked: false,
    tags: ['async', 'promises', 'javascript'],
    progress: 65
  },
  {
    id: '2',
    title: 'React Hooks Deep Dive',
    description: 'Explore advanced uses of React hooks',
    language: 'react' as CodeLanguage,
    code: `// Custom hook example
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}`,
    difficulty: 'advanced' as const,
    likes: 215,
    isLocked: false,
    tags: ['react', 'hooks', 'custom-hooks'],
    progress: 80
  },
  {
    id: '3',
    title: 'CSS Grid Mastery',
    description: 'Creating complex layouts with CSS Grid',
    language: 'css' as CodeLanguage,
    code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}

.grid-item {
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  transition: transform 0.3s ease;
}

.grid-item:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}`,
    difficulty: 'intermediate' as const,
    likes: 98,
    isLocked: false,
    tags: ['css', 'layout', 'grid'],
    progress: 40
  },
  {
    id: '4',
    title: 'Python Data Analysis',
    description: 'Analyzing datasets with Pandas',
    language: 'python' as CodeLanguage,
    code: `import pandas as pd
import matplotlib.pyplot as plt

# Load data from CSV
data = pd.read_csv('data.csv')

# Clean and transform data
cleaned_data = data.dropna()
grouped_data = cleaned_data.groupby('category').mean()

# Create visualization
plt.figure(figsize=(10, 6))
grouped_data['value'].plot(kind='bar')
plt.title('Average Values by Category')
plt.xlabel('Category')
plt.ylabel('Average Value')
plt.savefig('analysis_results.png')
plt.show()`,
    difficulty: 'advanced' as const,
    likes: 142,
    isLocked: true,
    tags: ['python', 'data-science', 'pandas'],
    progress: 0
  },
  {
    id: '5',
    title: 'TypeScript Generics',
    description: 'Advanced TypeScript generics patterns',
    language: 'typescript' as CodeLanguage,
    code: `// Generic function with constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Usage
interface Person {
  name: string;
}

interface Address {
  city: string;
  country: string;
}

const person: Person = { name: 'John' };
const address: Address = { city: 'New York', country: 'USA' };

const personWithAddress = merge(person, address);
console.log(personWithAddress);
// Output: { name: 'John', city: 'New York', country: 'USA' }`,
    difficulty: 'advanced' as const,
    likes: 176,
    isLocked: true,
    tags: ['typescript', 'generics', 'types'],
    progress: 0
  },
];
