import { cn } from "@/utils/cn";

const Loading = ({ className }) => {
  return (
    <div className={cn("animate-pulse space-y-8", className)}>
      {/* Header skeleton */}
      <div className="text-center space-y-4">
        <div className="h-12 bg-bottle-green-100 rounded-lg mx-auto w-3/4"></div>
        <div className="h-6 bg-bottle-green-50 rounded mx-auto w-1/2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-bottle-green-50 rounded mx-auto w-3/4"></div>
          <div className="h-4 bg-bottle-green-50 rounded mx-auto w-2/3"></div>
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-bottle-green-100">
            <div className="h-8 bg-bottle-green-100 rounded mb-2"></div>
            <div className="h-4 bg-bottle-green-50 rounded w-2/3"></div>
          </div>
        ))}
      </div>

      {/* Section skeletons */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="space-y-6">
          <div className="h-8 bg-bottle-green-100 rounded w-1/4"></div>
          <div className="grid gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl border border-bottle-green-100">
                <div className="space-y-3">
                  <div className="h-6 bg-bottle-green-100 rounded w-1/3"></div>
                  <div className="h-4 bg-bottle-green-50 rounded w-1/2"></div>
                  <div className="h-4 bg-bottle-green-50 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;