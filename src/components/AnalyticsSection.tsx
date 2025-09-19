import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Award, BarChart3, Target } from "lucide-react";

const AnalyticsSection = () => {
  const stats = [
    {
      icon: BarChart3,
      title: "Videos Analyzed",
      value: "127,456",
      change: "+12.5%",
      changeType: "positive" as const
    },
    {
      icon: Target,
      title: "Accuracy Rate",
      value: "94.2%",
      change: "+2.1%", 
      changeType: "positive" as const
    },
    {
      icon: Users,
      title: "Active Users",
      value: "48,291",
      change: "+18.7%",
      changeType: "positive" as const
    },
    {
      icon: Clock,
      title: "Avg Analysis Time",
      value: "2.3s",
      change: "-0.8s",
      changeType: "positive" as const
    }
  ];

  const recentAnalyses = [
    {
      topic: "Artificial Intelligence Basics",
      videosCompared: 15,
      topAccuracy: 96,
      timeAgo: "2 minutes ago"
    },
    {
      topic: "Quantum Computing Explained", 
      videosCompared: 8,
      topAccuracy: 89,
      timeAgo: "5 minutes ago"
    },
    {
      topic: "Sustainable Energy Solutions",
      videosCompared: 12,
      topAccuracy: 93,
      timeAgo: "8 minutes ago"
    },
    {
      topic: "Space Exploration Updates",
      videosCompared: 20,
      topAccuracy: 91,
      timeAgo: "12 minutes ago"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Platform Analytics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights into our ML-powered video analysis performance and user engagement metrics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    variant={stat.changeType === 'positive' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </Card>
          ))}
        </div>

        {/* Recent Analyses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Recent Analyses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalyses.map((analysis, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{analysis.topic}</h4>
                    <p className="text-sm text-muted-foreground">
                      {analysis.videosCompared} videos compared • {analysis.timeAgo}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-semibold text-success">{analysis.topAccuracy}%</p>
                      <p className="text-xs text-muted-foreground">Top Score</p>
                    </div>
                    <Award className="w-5 h-5 text-warning" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Highlight */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <div className="p-3 rounded-full bg-primary/20">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold">99.7% Uptime</p>
              <p className="text-sm text-muted-foreground">
                Reliable ML analysis with sub-second response times
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;