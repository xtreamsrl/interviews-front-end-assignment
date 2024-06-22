import { useEffect } from 'react';
import Image from 'next/image';
import { Recipe } from '../utils/types';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = 'visible';
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('recipe-modal-content');
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    disableScroll();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      enableScroll();
    };
  }, [onClose]);

  if (!recipe) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-40 py-20">
      <div id="recipe-modal-content" className="flex bg-white min-w-full min-h-full">
        <div className="w-full relative">
          <Image
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            objectFit="cover"
            className="max-w-full h-full"
          />
        </div>
        <div className="m-16 relative w-full">
          <button onClick={onClose} className="absolute text-4xl top-2 right-2 text-gray-500 hover:text-gray-700">
            &times;
          </button>
          <h2 className="h-100 font-serif text-7xl pb-20">{recipe.name}</h2>
          <h3 className="text-2xl font-serif mb-6">Ingredients</h3>
          <ul className="list-disc pl-5 mb-10">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-serif mb-6">Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
