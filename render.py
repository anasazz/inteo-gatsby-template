import bpy
import os
import sys

# Define the output directory for the rendered images
output_dir = "/home/kasm-user/fcopie/"  # Replace with your desired directory
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Get the current scene
scene = bpy.context.scene

# Function to render from a specific camera
def render_camera(camera_obj, output_path):
    print(f"\nRendering from camera: {camera_obj.name}")
    print(f"Output file: {output_path}")
    
    # Set the camera as the active camera
    scene.camera = camera_obj
    
    # Set the output file path
    scene.render.filepath = output_path
    
    # Perform the render
    bpy.ops.render.render(write_still=True)
    print(f"Render complete for camera: {camera_obj.name}")

# Iterate through all cameras in the scene
cameras = [obj for obj in bpy.data.objects if obj.type == 'CAMERA']
total_cameras = len(cameras)
print(f"Total cameras to render: {total_cameras}")

for index, camera in enumerate(cameras, start=1):
    print(f"\n--- Starting render for camera {index}/{total_cameras} ---")
    
    # Define the output file path for this camera
    camera_name = camera.name
    filepath = os.path.join(output_dir, f"{camera_name}.png")
    
    # Render the camera
    render_camera(camera, filepath)
    
    print(f"--- Completed render for camera {index}/{total_cameras} ---")

print("\nAll cameras have been rendered successfully.")