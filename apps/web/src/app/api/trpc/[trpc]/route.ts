import { NextApiRequest, NextApiResponse } from "next";
import { appRouter, createContext } from "@expenses/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

function setCorsHeaders(res: Response) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Request-Method", "*");
  res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.headers.set("Access-Control-Allow-Headers", "*");
}

export function OPTIONS() {
  const response = new Response(null, { status: 204 });
  setCorsHeaders(response);

  return response;
}

const handler = async (req: Request, res: NextApiResponse) => {
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => {
      return createContext({ req: req as unknown as NextApiRequest, res });
    },
  });

  setCorsHeaders(response);

  return response;
};

export { handler as GET, handler as POST };
