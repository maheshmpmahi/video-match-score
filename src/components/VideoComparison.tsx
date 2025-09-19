import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Eye, ThumbsUp, Clock, Award, TrendingUp } from "lucide-react";

interface VideoData {
  id: string;
  title: string;
  channel: string;
  thumbnail: string;
  duration: string;
  views: string;
  likes: string;
  accuracyScore: number;
  trustScore: number;
  factualityScore: number;
  isRecommended?: boolean;
}

const VideoComparison = () => {
  // Mock data for demonstration
  const videos: VideoData[] = [
    {
      id: "1",
      title: "Climate Change: The Complete Scientific Guide",
      channel: "ScienceToday",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "15:42",
      views: "2.1M",
      likes: "89K",
      accuracyScore: 94,
      trustScore: 92,
      factualityScore: 96,
      isRecommended: true
    },
    {
      id: "2", 
      title: "Understanding Climate Change in 2024",
      channel: "EcoEducation",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "12:18",
      views: "856K",
      likes: "34K", 
      accuracyScore: 87,
      trustScore: 85,
      factualityScore: 89
    },
    {
      id: "3",
      title: "Climate Crisis: What You Need to Know",
      channel: "NewsNetwork",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", 
      duration: "8:33",
      views: "1.5M",
      likes: "67K",
      accuracyScore: 78,
      trustScore: 82,
      factualityScore: 74
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-warning"; 
    return "text-destructive";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return "success";
    if (score >= 75) return "warning";
    return "destructive";
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Video Accuracy Comparison</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI analyzes content quality, factual accuracy, and source reliability to find the best videos on your topic.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {videos.map((video, index) => (
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
                  <div className="absolute top-2 left-2">
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

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              Highest accuracy score: 94% - "Climate Change: The Complete Scientific Guide"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComparison;