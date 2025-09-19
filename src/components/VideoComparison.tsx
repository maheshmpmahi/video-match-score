import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Eye, ThumbsUp, Clock, Award, TrendingUp, Filter, BarChart } from "lucide-react";
import { useState } from "react";

interface VideoData {
  id: string;
  title: string;
  channel: string;
  thumbnail: string;
  duration: string;
  durationSeconds: number;
  views: string;
  likes: string;
  accuracyScore: number;
  trustScore: number;
  factualityScore: number;
  durationScore: number;
  isRecommended?: boolean;
}

const VideoComparison = () => {
  const [sortBy, setSortBy] = useState<'accuracy' | 'duration' | 'combined'>('combined');
  const [durationFilter, setDurationFilter] = useState<'all' | 'short' | 'medium' | 'long'>('all');

  // Mock data for demonstration
  const videos: VideoData[] = [
    {
      id: "1",
      title: "Climate Change: The Complete Scientific Guide",
      channel: "ScienceToday",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "15:42",
      durationSeconds: 942,
      views: "2.1M",
      likes: "89K",
      accuracyScore: 94,
      trustScore: 92,
      factualityScore: 96,
      durationScore: 88, // Good for comprehensive content
      isRecommended: true
    },
    {
      id: "2", 
      title: "Understanding Climate Change in 2024",
      channel: "EcoEducation",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "12:18",
      durationSeconds: 738,
      views: "856K",
      likes: "34K", 
      accuracyScore: 87,
      trustScore: 85,
      factualityScore: 89,
      durationScore: 92 // Perfect balance of content and time
    },
    {
      id: "3",
      title: "Climate Crisis: What You Need to Know",
      channel: "NewsNetwork",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", 
      duration: "8:33",
      durationSeconds: 513,
      views: "1.5M",
      likes: "67K",
      accuracyScore: 78,
      trustScore: 82,
      factualityScore: 74,
      durationScore: 85 // Good for quick overview
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-warning"; 
    return "text-destructive";
  };

  const getDurationCategory = (seconds: number) => {
    if (seconds < 600) return 'short'; // < 10 minutes
    if (seconds < 1200) return 'medium'; // 10-20 minutes
    return 'long'; // > 20 minutes
  };

  const getDurationBadgeColor = (seconds: number) => {
    const category = getDurationCategory(seconds);
    if (category === 'short') return 'bg-info/20 text-info';
    if (category === 'medium') return 'bg-success/20 text-success';
    return 'bg-warning/20 text-warning';
  };

  const getFilteredAndSortedVideos = () => {
    let filtered = videos.filter(video => {
      if (durationFilter === 'all') return true;
      return getDurationCategory(video.durationSeconds) === durationFilter;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'accuracy') return b.accuracyScore - a.accuracyScore;
      if (sortBy === 'duration') return a.durationSeconds - b.durationSeconds;
      // Combined score: accuracy + duration optimization
      const aCombined = (a.accuracyScore + a.durationScore) / 2;
      const bCombined = (b.accuracyScore + b.durationScore) / 2;
      return bCombined - aCombined;
    });
  };

  const filteredVideos = getFilteredAndSortedVideos();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Smart Video Duration Analysis</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI considers both content accuracy and optimal video duration to match your learning preferences and time constraints.
          </p>
        </div>

        {/* Filter and Sort Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Duration:</span>
            <div className="flex gap-2">
              {['all', 'short', 'medium', 'long'].map((filter) => (
                <Button
                  key={filter}
                  variant={durationFilter === filter ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDurationFilter(filter as any)}
                  className="capitalize"
                >
                  {filter === 'short' && <Clock className="w-3 h-3 mr-1" />}
                  {filter}
                  {filter === 'short' && ' (<10m)'}
                  {filter === 'medium' && ' (10-20m)'}
                  {filter === 'long' && ' (>20m)'}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <BarChart className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Sort by:</span>
            <div className="flex gap-2">
              {[
                { key: 'combined', label: 'Best Match' },
                { key: 'accuracy', label: 'Accuracy' },
                { key: 'duration', label: 'Duration' }
              ].map((sort) => (
                <Button
                  key={sort.key}
                  variant={sortBy === sort.key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy(sort.key as any)}
                >
                  {sort.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {filteredVideos.map((video, index) => (
            <Card key={video.id} className={`relative transition-all hover:shadow-lg ${
              video.isRecommended 
                ? 'ring-2 ring-primary shadow-lg bg-gradient-to-br from-card to-primary/5' 
                : 'hover:shadow-card'
            }`}>
              {video.isRecommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="default" className="bg-primary text-primary-foreground px-3 py-1">
                    <Award className="w-4 h-4 mr-1" />
                    Recommended
                  </Badge>
                </div>
              )}
              
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 flex gap-2">
                    <Badge 
                      variant="secondary"
                      className={getDurationBadgeColor(video.durationSeconds)}
                    >
                      {getDurationCategory(video.durationSeconds)} form
                    </Badge>
                    <Badge 
                      variant={video.isRecommended ? "default" : "secondary"}
                      className={getScoreColor(video.accuracyScore)}
                    >
                      {video.accuracyScore}% Accurate
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
                  {video.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-3">{video.channel}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {video.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {video.likes}
                  </div>
                </div>

                {/* Accuracy Metrics */}
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accuracy Score</span>
                      <span className={getScoreColor(video.accuracyScore)}>{video.accuracyScore}%</span>
                    </div>
                    <Progress value={video.accuracyScore} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Trust Score</span>
                      <span className={getScoreColor(video.trustScore)}>{video.trustScore}%</span>
                    </div>
                    <Progress value={video.trustScore} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Factuality</span>
                      <span className={getScoreColor(video.factualityScore)}>{video.factualityScore}%</span>
                    </div>
                    <Progress value={video.factualityScore} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Duration Score</span>
                      <span className={getScoreColor(video.durationScore)}>{video.durationScore}%</span>
                    </div>
                    <Progress value={video.durationScore} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Optimal length for {getDurationCategory(video.durationSeconds)} content
                    </p>
                  </div>
                </div>

                <Button 
                  variant={video.isRecommended ? "hero" : "outline"} 
                  className="w-full"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          {/* Duration Analysis */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">
                Best duration balance: {filteredVideos[0]?.duration} - Perfect for comprehensive learning
              </span>
            </div>
          </div>
          
          {/* Combined Recommendation */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 rounded-full border border-success/20">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-success font-medium">
                Top recommendation considers both accuracy ({filteredVideos[0]?.accuracyScore}%) and optimal duration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComparison;