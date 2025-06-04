import React from "react";
import { Link } from "react-router-dom";

const sections = [
	{
		to: "/section/land",
		label: "Land for Rent",
		bg: "bg-green-100",
		img: "https://img.icons8.com/color/96/000000/field.png",
		hover: "hover:bg-green-200",
	},
	{
		to: "/section/tractors",
		label: "Tractors & Equipment",
		bg: "bg-yellow-100",
		img: "https://img.icons8.com/color/96/000000/tractor.png",
		hover: "hover:bg-yellow-200",
	},
	{
		to: "/section/crops",
		label: "Crops for Sale",
		bg: "bg-blue-100",
		img: "https://img.icons8.com/color/96/000000/wheat.png",
		hover: "hover:bg-blue-200",
	},
	{
		to: "/section/seeds",
		label: "Seeds & Fertilizers",
		bg: "bg-purple-100",
		img: "https://img.icons8.com/color/96/000000/seeds.png",
		hover: "hover:bg-purple-200",
	},
];

export default function DashboardPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-2">
			<h1 className="text-3xl font-bold text-green-800 mb-10 text-center animate-fade-in">
				Welcome to Your Dashboard
			</h1>
			<div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
				{sections.map((section, idx) => (
					<Link
						key={section.to}
						to={section.to}
						className={`
              ${section.bg} ${section.hover}
              rounded-2xl shadow-lg flex flex-col items-center p-8
              transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group
              focus:outline-none focus:ring-2 focus:ring-green-400
              animate-slide-up
            `}
						style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
					>
						<img
							src={section.img}
							alt={section.label}
							className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-300"
						/>
						<span className="text-xl font-semibold text-green-900 group-hover:text-green-700 transition-colors text-center">
							{section.label}
						</span>
					</Link>
				))}
			</div>
			{/* Custom Animations */}
			<style>
				{`
          .animate-fade-in {
            animation: fadeIn 1.2s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-up {
            opacity: 0;
            animation: slideUp 0.8s forwards;
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
			</style>
		</div>
	);
}