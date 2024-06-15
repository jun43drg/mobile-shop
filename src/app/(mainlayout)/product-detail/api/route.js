export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const res = await fetch("http://localhost:3000/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const { products } = await res.json();
  const producDetail = products.find((p) => p.id == id);
  return Response.json(producDetail);
}
