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
     *      path="/api/invoices",
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
     *      path="/api/invoices",
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
     * @OA\Get(
     *      path="/api/invoices/{id}",
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="ID do registro",
     *          @OA\Schema(type="integer")
     *      ),
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
    public function show(Invoice $invoice)
    {
        return new InvoiceResource($invoice);
    }

    /**
     * @OA\Put(
     *      path="/api/invoices/{id}",
     *      @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID do registro",
     *         @OA\Schema(type="integer")
     *     ),
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
    public function update(Invoice $invoice, Request $request)
    {
        $invoice->fill($request->all());
        $invoice->save();
    }

    /**
     * @OA\Delete(
     *      path="/api/invoices/{id}",
     *      @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID do registro",
     *         @OA\Schema(type="integer")
     *     ),
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
    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
    }
}
