<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @OA\Info(
 *     version="1.0",
 *     title="Invoices"
 * )
 */
class InvoiceController extends Controller
{
    /**
     * @OA\Get(
     *      path="/invoices",
     *      @OA\Response(
     *          response=200,
     *          description="OK",
     *          @OA\MediaType(
     *              mediaType="application/json"
     *          )
     *      )
     * )
     *
     */
    public function index()
    {
        return InvoiceResource::collection(Invoice::all())
                              ->additional([
                                'balance' => Invoice::getBalance(),
                              ]);
    }

    /**
     * @OA\Post(
     *      path="/invoices",
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *               mediaType="application/json",
     *               @OA\Schema(
     *                  @OA\Property(
     *                      property="type",
     *                      type="string",
     *                  ),
     *                  @OA\Property(
     *                      property="description",
     *                      type="string",
     *                  ),
     *                  @OA\Property(
     *                      property="amount",
     *                      type="double",
     *                  )
     *               )
     *          )
     *      ),
     *      @OA\Response(
     *          response="200",
     *          description="OK"
     *      )
     * )
     *
     */
    public function store(Request $request)
    {
        $invoice = Invoice::create($request->all());

        return new JsonResponse(['id' => $invoice->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
        return new InvoiceResource($invoice->toArray());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Invoice $invoice, Request $request)
    {
        $invoice->fill($request->all());
        $invoice->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
    }
}
