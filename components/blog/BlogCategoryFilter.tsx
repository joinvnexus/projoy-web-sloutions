// components/blog/BlogCategoryFilter.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import { blogCategories, type BlogPost } from "@/lib/data/blog";
import { Tag } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { formatDate, cn } from "@/lib/utils";

const categoryTagMap: Record<string, "brand" | "accent" | "slate"> = {
  "Local SEO": "accent",
  "Web Development": "brand",
  "AI Solutions": "brand",
};

interface BlogCategoryFilterProps {
  posts: BlogPost[];
}

/**
 * Client island for the blog "More Articles" grid. Renders interactive,
 * keyboard-accessible category pills that filter the post grid in place —
 * replaces the previous static, non-interactive pill markup.
 */
export function BlogCategoryFilter({ posts }: BlogCategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts;
    return posts.filter((p) => p.categorySlug === activeCategory);
  }, [posts, activeCategory]);

  return (
    <div>
      {/* Filter pills */}
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="group"
        aria-label="Filter articles by category"
      >
        {blogCategories.map((cat) => {
          const isActive = activeCategory === cat.slug;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActiveCategory(cat.slug)}
              aria-pressed={isActive}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                isActive
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-slate-600 border-slate-200 hover:border-brand-200 hover:text-brand-700"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Filtered grid */}
      {filteredPosts.length === 0 ? (
        <p className="text-slate-500 text-sm py-10 text-center">
          No articles in this category yet — check back soon.
        </p>
      ) : (
        <StaggerContainer
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="card card-hover p-6 group flex flex-col h-full block"
              >
                <Tag variant={categoryTagMap[post.category] ?? "slate"} className="mb-4 w-fit">
                  {post.category}
                </Tag>
                <h3 className="font-display font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-brand-700 transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <time className="text-xs text-slate-400" dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />{post.readingTime} min
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}
