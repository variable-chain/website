import React from 'react';
import Image from 'next/image';

const Header_DEX: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-gray-700 via-gray-600 to-white text-white p-8">
          <div className="grid grid-cols-2 gap-8">
            {/* First Grid */}
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl font-bold mb-4 text-opacity-90">Trade Perpetuals Collect SBTs & Earn Revenue</h1>
              <p className="text-lg mb-6 text-opacity-70">
                Advanced Layer 3 Derivatives DEX, operating as a Validium AppChain on StarkNet's Layer 2 scaling solution.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Join Discord
              </button>
            </div>
    
            {/* Second Grid */}
            <div>
              {/* Replace 'your-image-path' with the actual path to your image */}
              {/* <Image src="/your-image-path" alt="Image Alt Text" className="rounded-md" /> */}
            </div>
          </div>
        </header>
      );
    };

export default Header_DEX;
