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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div id="recipe-modal-content" className="flex bg-white p-6">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={400}
          height={800}
        />
        <div className="ml-6">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">{recipe.name}</h2>
          <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc pl-5 mb-4">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
