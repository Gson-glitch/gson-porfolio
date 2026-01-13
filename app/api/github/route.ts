import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';
import { GITHUB_TOKEN } from '@/config';

interface GitHubRepoNode {
  id: string;
  name: string;
  description: string;
  url: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  stargazerCount: number;
  forkCount: number;
}

interface GitHubGraphQLResponse {
  viewer: {
    pinnedItems: {
      nodes: GitHubRepoNode[];
    };
  };
}

export async function GET() {
  const token = GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'GitHub Token missing' }, { status: 500 });
  }

  const octokit = new Octokit({ auth: token });

  const query = `
    {
      viewer {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              primaryLanguage {
                name
                color
              }
              stargazerCount
              forkCount
            }
          }
        }
      }
    }
  `;

  try {
    const response = await octokit.graphql<GitHubGraphQLResponse>(query);
    const pinnedRepos = response.viewer.pinnedItems.nodes.map((repo) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description,
      longDescription: repo.description,
      tech: [repo.primaryLanguage?.name || 'Code'],
      url: repo.url,
      stars: repo.stargazerCount,
      forks: repo.forkCount,
      category: 'web',
      featured: true,
      highlights: [],
      metrics: []
    }));

    return NextResponse.json(pinnedRepos);
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
