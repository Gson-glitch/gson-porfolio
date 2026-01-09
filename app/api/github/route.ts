import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

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
    const response: any = await octokit.graphql(query);
    const pinnedRepos = response.viewer.pinnedItems.nodes.map((repo: any) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description,
      longDescription: repo.description, // Added missing required field
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