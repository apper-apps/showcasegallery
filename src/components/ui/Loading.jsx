import { cn } from "@/utils/cn";

const Loading = ({ className }) => {
  return (
    <div className={cn("animate-pulse space-y-8 min-h-screen bg-gradient-to-br from-bottle-green-50 to-white p-8", className)}>
      {/* Header skeleton */}
      <div className="text-center space-y-4">
        <div className="h-12 bg-bottle-green-200 rounded-lg mx-auto w-3/4 shimmer"></div>
        <div className="h-6 bg-bottle-green-100 rounded mx-auto w-1/2 shimmer"></div>
        <div className="space-y-2">
          <div className="h-4 bg-bottle-green-100 rounded mx-auto w-3/4 shimmer"></div>
          <div className="h-4 bg-bottle-green-100 rounded mx-auto w-2/3 shimmer"></div>
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-bottle-green-200 shadow-sm">
            <div className="h-8 bg-bottle-green-200 rounded mb-2 shimmer"></div>
            <div className="h-4 bg-bottle-green-100 rounded w-2/3 shimmer"></div>
          </div>
        ))}
      </div>

      {/* Section skeletons */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="space-y-6">
          <div className="h-8 bg-bottle-green-200 rounded w-1/4 shimmer"></div>
          <div className="grid gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl border border-bottle-green-200 shadow-sm">
                <div className="space-y-3">
                  <div className="h-6 bg-bottle-green-200 rounded w-1/3 shimmer"></div>
                  <div className="h-4 bg-bottle-green-100 rounded w-1/2 shimmer"></div>
                  <div className="h-4 bg-bottle-green-100 rounded w-2/3 shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <style jsx>{`
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(45, 90, 61, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default Loading;